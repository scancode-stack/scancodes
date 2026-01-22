// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Eye, EyeOff } from 'lucide-react';

// type LoginForm = {
//   email: string;
//   password: string;
// };

// export default function LoginPage() {
//   const router = useRouter();

//   const [formData, setFormData] = useState<LoginForm>({
//     email: '',
//     password: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       // ✅ SAFE JSON PARSING
//       const text = await res.text();
//       const data = text ? JSON.parse(text) : null;

//       if (!res.ok) {
//         throw new Error(data?.message || 'Login failed');
//       }

//       if (!data?.token) {
//         throw new Error('Authentication token not returned');
//       }

//       localStorage.setItem('token', data.token);
//       router.push('/dashboard');
//     } catch (err: any) {
//       setError(err.message || 'Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
//         <h1 className="text-2xl font-bold text-center text-gray-800">
//           Welcome Back
//         </h1>
//         <p className="text-center text-gray-500 mt-1">
//           Login to your account
//         </p>

//         {error && (
//           <div className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
//             />
//           </div>

//           {/* Password with eye toggle */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Password
//             </label>

//             <div className="relative mt-1">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
//               />

//               <button
//                 type="button"
//                 onClick={() => setShowPassword((prev) => !prev)}
//                 className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
//               >
//                 {showPassword ? (
//                   <EyeOff size={18} />
//                 ) : (
//                   <Eye size={18} />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full mt-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-2.5 rounded-md transition disabled:opacity-60"
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         <p className="mt-6 text-center text-sm text-gray-600">
//           Don’t have an account?{' '}
//           <a
//             href="/auth/register"
//             className="text-green-700 hover:underline font-medium"
//           >
//             Register
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }



'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const apiUrl = process.env.NEXT_PUBLIC_AUTH_API_URL;
    if (!apiUrl) {
      setError('API URL is not defined. Check your .env.local file.');
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const res = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const text = await res.text();
      const data = text ? JSON.parse(text) : null;

      if (!res.ok) {
        throw new Error(data?.message || 'Login failed');
      }

      if (!data?.token) {
        throw new Error('Authentication token not returned');
      }

      // ✅ IMPORTANT: unique token for this backend
      localStorage.setItem('admin_token', data.token);

      // ✅ Redirect ONLY to this backend's dashboard
      router.push('/akureadmin');
    } catch (err: any) {
      if (err.name === 'AbortError') {
        setError('Request timed out. Please check your network or backend server.');
      } else {
        setError(err.message || 'Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mt-1">
          Login to your account
        </p>

        {error && (
          <div className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative mt-1">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-2.5 rounded-md transition disabled:opacity-60"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <a
            href="/auth/register"
            className="text-green-700 hover:underline font-medium"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
