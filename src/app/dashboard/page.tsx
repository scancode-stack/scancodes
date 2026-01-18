


// 'use client';

// import { useEffect, useState } from 'react';

// type Food = {
//   id: string;
//   name: string;
//   price: string;
//   category: string;
//   drinkSubCategory?: string;
// };

// export default function DashboardPage() {
//   const [foods, setFoods] = useState<Food[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // 🔍 SEARCH
//   const [search, setSearch] = useState('');

//   // Pagination
//   const [page, setPage] = useState(1);
//   const limit = 10;

//   // Modal states
//   const [showModal, setShowModal] = useState(false);
//   const [isEdit, setIsEdit] = useState(false);

//   // ✅ DELETE MODAL STATES (ADDED)
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [deleteFoodId, setDeleteFoodId] = useState<string | null>(null);

//   // VAT modal
//   const [showVatModal, setShowVatModal] = useState(false);
//   const [vat, setVat] = useState('');
//   const [vatFoodId, setVatFoodId] = useState<string | null>(null);

//   // Form state
//   const [form, setForm] = useState({
//     id: '',
//     name: '',
//     price: '',
//     category: 'Food',
//     drinkSubCategory: '',
//   });

//   /* ================= GET TOKEN ================= */
//   const getToken = () => {
//     if (typeof window === 'undefined') return null;
//     return localStorage.getItem('token');
//   };

//   /* ================= CATEGORY SORT ORDER ================= */
//   const categoryOrder: Record<string, number> = {
//     Food: 1,
//     Extra: 2,
//     Drinks: 3,
//   };

//   /* ================= DRINK SUB-CATEGORIES ================= */
//   const DRINK_SUB_CATEGORIES = [
//     { label: 'Wine / Champagne / Cream Liqueur', value: 'WINE_CHAMPAGNE_CREAMLIQUEUR' },
//     { label: 'Whisky', value: 'WHISKY' },
//     { label: 'Vodka', value: 'VODKA' },
//     { label: 'Rum / Gin / Bitters', value: 'RUM_GIN_BITTERS' },
//     { label: 'Tequila', value: 'TEQUILA' },
//     { label: 'Cognac / Brandy', value: 'COGNAC_BRANDY' },
//     { label: 'Beer', value: 'BEER' },
//     { label: 'Energy Drinks / Water / Coffee / Tea', value: 'ENERGY_DRINKS_WATER_COFFEE_TEA' },
//     { label: 'Mocktails / Cocktails / Juice', value: 'MOCKTAILS_COCKTAIL_JUICE' },
//   ];

//   /* ================= FETCH FOODS ================= */
//   const fetchFoods = async () => {
//     const token = getToken();

//     if (!token) {
//       setError('Not authenticated. Please login again.');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/food/all-food?page=${page}&limit=${limit}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || 'Failed to fetch foods');
//       }

//       const foodItems = data.foodItems || [];

//       // 🔍 find VAT record
//       const vatItem = foodItems.find((item: any) => item.category === 'VAT');

//       if (vatItem) {
//         setVatFoodId(vatItem.id);
//         setVat(vatItem.price);
//       }

//       const sortedFoods = foodItems.sort(
//         (a: Food, b: Food) =>
//           (categoryOrder[a.category] || 99) - (categoryOrder[b.category] || 99)
//       );

//       setFoods(sortedFoods);
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchFoods();
//   }, [page]);

//   /* ================= SEARCH FILTER ================= */
//   const filteredFoods = foods.filter((food) =>
//     food.name.toLowerCase().includes(search.toLowerCase())
//   );

//   /* ================= OPEN CREATE ================= */
//   const openCreate = () => {
//     setIsEdit(false);
//     setForm({
//       id: '',
//       name: '',
//       price: '',
//       category: 'Food',
//       drinkSubCategory: '',
//     });
//     setShowModal(true);
//   };

//   /* ================= OPEN EDIT ================= */
//   const openEdit = (food: Food) => {
//     setIsEdit(true);
//     setForm({
//       id: food.id,
//       name: food.name,
//       price: food.price,
//       category: food.category,
//       drinkSubCategory: food.drinkSubCategory || '',
//     });
//     setShowModal(true);
//   };

//   /* ================= OPEN DELETE MODAL (ADDED) ================= */
//   const openDeleteModal = (id: string) => {
//     setDeleteFoodId(id);
//     setShowDeleteModal(true);
//   };

//   /* ================= CONFIRM DELETE (FIXED) ================= */
//   const confirmDeleteFood = async () => {
//     if (!deleteFoodId) return;

//     const token = getToken();
//     if (!token) {
//       alert('Session expired. Please login again.');
//       return;
//     }

//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/food/delete-food`,
//         {
//           method: 'DELETE',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ id: deleteFoodId }),
//         }
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || 'Failed to delete food');
//       }

//       setShowDeleteModal(false);
//       setDeleteFoodId(null);
//       fetchFoods();
//     } catch (err: any) {
//       alert(err.message);
//     }
//   };

//   /* ================= CREATE / EDIT ================= */
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const token = getToken();
//     if (!token) {
//       alert('Session expired. Please login again.');
//       return;
//     }

//     const url = isEdit
//       ? `${process.env.NEXT_PUBLIC_API_URL}/food/edit-food/${form.id}`
//       : `${process.env.NEXT_PUBLIC_API_URL}/food/create-food`;

//     const method = isEdit ? 'PUT' : 'POST';

//     try {
//       const res = await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           name: form.name,
//           price: Number(form.price),
//           category: form.category,
//           ...(form.category === 'Drinks' && {
//             drinkSubCategory: form.drinkSubCategory,
//           }),
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || 'Action failed');
//       }

//       setShowModal(false);
//       fetchFoods();
//     } catch (err: any) {
//       alert(err.message);
//     }
//   };

//   /* ================= UPDATE VAT ================= */
//   const handleVatSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!vatFoodId) {
//       alert('VAT record not found');
//       return;
//     }

//     const token = getToken();
//     if (!token) {
//       alert('Session expired. Please login again.');
//       return;
//     }

//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/food/edit-food/${vatFoodId}`,
//         {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             price: Number(vat),
//           }),
//         }
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || 'Failed to update VAT');
//       }

//       alert('VAT updated successfully');
//       setShowVatModal(false);
//       fetchFoods();
//     } catch (err: any) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       {/* Header */}
//       <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
//           <p className="text-gray-500">Manage all menu items</p>
//         </div>

//         <input
//           type="text"
//           placeholder="Search item by name..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full lg:w-72 border px-4 py-2 rounded-md"
//         />

//         <div className="flex gap-3">
//           <button
//             onClick={() => setShowVatModal(true)}
//             className="border border-green-700 text-green-700 px-5 py-2 rounded-md"
//           >
//             Edit VAT
//           </button>

//           <button
//             onClick={openCreate}
//             className="bg-green-700 text-white px-5 py-2 rounded-md"
//           >
//             + Add New
//           </button>
//         </div>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {filteredFoods.map((food) => (
//           <div key={food.id} className="bg-white rounded-xl shadow-md p-4">
//             <div className="text-xs text-green-700 font-semibold mb-1">
//               {food.category}
//             </div>

//             <h3 className="font-semibold">{food.name}</h3>

//             <p className="mt-2 font-bold">
//               ₦{Number(food.price).toLocaleString()}
//             </p>

//             <div className="flex gap-2 mt-4">
//               <button
//                 onClick={() => openEdit(food)}
//                 className="w-1/2 bg-blue-600 text-white py-2 rounded-md"
//               >
//                 Edit
//               </button>

//               <button
//                 onClick={() => openDeleteModal(food.id)}
//                 className="w-1/2 bg-red-600 text-white py-2 rounded-md"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* DELETE MODAL */}
//       {showDeleteModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white w-full max-w-sm rounded-xl p-6">
//             <h2 className="text-lg font-bold mb-3">Confirm Delete</h2>
//             <p className="text-sm text-gray-600">
//               Are you sure you want to delete this item?
//             </p>

//             <div className="flex gap-3 mt-6">
//               <button
//                 onClick={() => setShowDeleteModal(false)}
//                 className="w-1/2 border py-2 rounded-md"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={confirmDeleteFood}
//                 className="w-1/2 bg-red-600 text-white py-2 rounded-md"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* VAT MODAL */}
//       {showVatModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <form onSubmit={handleVatSubmit} className="bg-white w-full max-w-sm rounded-xl p-6">
//             <h2 className="text-xl font-bold mb-4">Update VAT</h2>

//             <input
//               type="number"
//               placeholder="VAT %"
//               value={vat}
//               onChange={(e) => setVat(e.target.value)}
//               required
//               className="w-full border px-4 py-2 rounded-md"
//             />

//             <div className="flex gap-3 mt-6">
//               <button
//                 type="button"
//                 onClick={() => setShowVatModal(false)}
//                 className="w-1/2 border py-2 rounded-md"
//               >
//                 Cancel
//               </button>

//               <button
//                 type="submit"
//                 className="w-1/2 bg-green-700 text-white py-2 rounded-md"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* CREATE / EDIT MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <form onSubmit={handleSubmit} className="bg-white w-full max-w-md rounded-xl p-6">
//             <h2 className="text-xl font-bold mb-4">
//               {isEdit ? 'Edit Food' : 'Create item'}
//             </h2>

//             <div className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="item name"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 required
//                 className="w-full border px-4 py-2 rounded-md"
//               />

//               <input
//                 type="number"
//                 placeholder="Price"
//                 value={form.price}
//                 onChange={(e) => setForm({ ...form, price: e.target.value })}
//                 required
//                 className="w-full border px-4 py-2 rounded-md"
//               />

//               <select
//                 value={form.category}
//                 onChange={(e) =>
//                   setForm({ ...form, category: e.target.value, drinkSubCategory: '' })
//                 }
//                 className="w-full border px-4 py-2 rounded-md"
//               >
//                 <option value="Food">Food</option>
//                 <option value="Extra">Extra</option>
//                 <option value="Drinks">Drinks</option>
//               </select>

//               {form.category === 'Drinks' && (
//                 <select
//                   value={form.drinkSubCategory}
//                   onChange={(e) =>
//                     setForm({ ...form, drinkSubCategory: e.target.value })
//                   }
//                   required
//                   className="w-full border px-4 py-2 rounded-md"
//                 >
//                   <option value="">Select drink sub-category</option>
//                   {DRINK_SUB_CATEGORIES.map((item) => (
//                     <option key={item.value} value={item.value}>
//                       {item.label}
//                     </option>
//                   ))}
//                 </select>
//               )}
//             </div>

//             <div className="flex gap-3 mt-6">
//               <button
//                 type="button"
//                 onClick={() => setShowModal(false)}
//                 className="w-1/2 border py-2 rounded-md"
//               >
//                 Cancel
//               </button>

//               <button
//                 type="submit"
//                 className="w-1/2 bg-green-700 text-white py-2 rounded-md"
//               >
//                 {isEdit ? 'Update' : 'Create'}
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }





'use client';

import { useEffect, useState } from 'react';

type Food = {
  id: string;
  name: string;
  price: string;
  category: string;
  drinkSubCategory?: string; // ✅ added
};

export default function DashboardPage() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 🔍 SEARCH
  const [search, setSearch] = useState('');

  // Pagination
  const [page, setPage] = useState(1);
  const limit = 10;

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // ✅ DELETE MODAL STATES (ADDED)
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteFoodId, setDeleteFoodId] = useState<string | null>(null);


  // VAT modal
  const [showVatModal, setShowVatModal] = useState(false);
  const [vat, setVat] = useState('');
  const [vatFoodId, setVatFoodId] = useState<string | null>(null);

  // Form state
  const [form, setForm] = useState({
    id: '',
    name: '',
    price: '',
    category: 'Food',
    drinkSubCategory: '', // ✅ added
  });

  /* ================= GET TOKEN ================= */
  const getToken = () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('token');
  };

  /* ================= CATEGORY SORT ORDER ================= */
  const categoryOrder: Record<string, number> = {
    Food: 1,
    Extra: 2,
    Drinks: 3,
  };

  /* ================= DRINK SUB-CATEGORIES ================= */
  const DRINK_SUB_CATEGORIES = [
    { label: 'Wine / Champagne / Cream Liqueur', value: 'WINE_CHAMPAGNE_CREAMLIQUEUR' },
    { label: 'Whisky', value: 'WHISKY' },
    { label: 'Vodka', value: 'VODKA' },
    { label: 'Rum / Gin / Bitters', value: 'RUM_GIN_BITTERS' },
    { label: 'Tequila', value: 'TEQUILA' },
    { label: 'Cognac / Brandy', value: 'COGNAC_BRANDY' },
    { label: 'Beer', value: 'BEER' },
    { label: 'Energy Drinks / Water / Coffee / Tea', value: 'ENERGY_DRINKS_WATER_COFFEE_TEA' },
    { label: 'Mocktails / Cocktails / Juice', value: 'MOCKTAILS_COCKTAIL_JUICE' },
  ];

  /* ================= FETCH FOODS ================= */
  const fetchFoods = async () => {
    const token = getToken();

    if (!token) {
      setError('Not authenticated. Please login again.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/food/all-food?page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to fetch foods');
      }

      const foodItems = data.foodItems || [];

      // 🔍 find VAT record
      const vatItem = foodItems.find((item: any) => item.category === 'VAT');

      if (vatItem) {
        setVatFoodId(vatItem.id);
        setVat(vatItem.price);
      }

      const sortedFoods = foodItems.sort(
        (a: Food, b: Food) =>
          (categoryOrder[a.category] || 99) - (categoryOrder[b.category] || 99)
      );

      setFoods(sortedFoods);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, [page]);

  /* ================= SEARCH FILTER ================= */
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  /* ================= OPEN CREATE ================= */
  const openCreate = () => {
    setIsEdit(false);
    setForm({
      id: '',
      name: '',
      price: '',
      category: 'Food',
      drinkSubCategory: '', // ✅ added
    });
    setShowModal(true);
  };

  /* ================= OPEN EDIT ================= */
  const openEdit = (food: Food) => {
    setIsEdit(true);
    setForm({
      id: food.id,
      name: food.name,
      price: food.price,
      category: food.category,
      drinkSubCategory: food.drinkSubCategory || '', // ✅ safe fallback
    });
    setShowModal(true);
  };

  /* ================= DELETE FOOD ================= */
  /* ================= OPEN DELETE MODAL (ADDED) ================= */
  const openDeleteModal = (id: string) => {
    setDeleteFoodId(id);
    setShowDeleteModal(true);
  };

  /* ================= CONFIRM DELETE (FIXED) ================= */
  const confirmDeleteFood = async () => {
    if (!deleteFoodId) return;

    const token = getToken();
    if (!token) {
      alert('Session expired. Please login again.');
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/food/delete-food`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ id: deleteFoodId }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to delete food');
      }

      setShowDeleteModal(false);
      setDeleteFoodId(null);
      fetchFoods();
    } catch (err: any) {
      alert(err.message);
    }
  };


  /* ================= CREATE / EDIT ================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = getToken();
    if (!token) {
      alert('Session expired. Please login again.');
      return;
    }

    const url = isEdit
      ? `${process.env.NEXT_PUBLIC_API_URL}/food/edit-food/${form.id}`
      : `${process.env.NEXT_PUBLIC_API_URL}/food/create-food`;

    const method = isEdit ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: form.name,
          price: Number(form.price),
          category: form.category,
          ...(form.category === 'Drinks' && {
            drinkSubCategory: form.drinkSubCategory,
          }),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Action failed');
      }

      setShowModal(false);
      fetchFoods();
    } catch (err: any) {
      alert(err.message);
    }
  };

  /* ================= UPDATE VAT ================= */
  const handleVatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!vatFoodId) {
      alert('VAT record not found');
      return;
    }

    const token = getToken();
    if (!token) {
      alert('Session expired. Please login again.');
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/food/edit-food/${vatFoodId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            price: Number(vat),
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to update VAT');
      }

      alert('VAT updated successfully');
      setShowVatModal(false);
      fetchFoods();
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-500">Manage all menu items</p>
        </div>

        {/* 🔍 SEARCH BAR */}
        <input
          type="text"
          placeholder="Search item by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full lg:w-72 border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
        />

        <div className="flex gap-3">
          <button
            onClick={() => setShowVatModal(true)}
            className="border border-green-700 text-green-700 px-5 py-2 rounded-md text-sm font-medium hover:bg-green-50"
          >
            Edit VAT
          </button>

          <button
            onClick={openCreate}
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md text-sm font-medium"
          >
            + Add New
          </button>
        </div>
      </div>

      {/* Loading / Error */}
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {/* Food Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredFoods.map((food) => (
          <div key={food.id} className="bg-white rounded-xl shadow-md p-4">
            <div className="text-xs text-green-700 font-semibold mb-1">{food.category}</div>

            <h3 className="font-semibold text-gray-800">{food.name}</h3>

            <p className="mt-2 text-green-800 font-bold">
              ₦{Number(food.price).toLocaleString()}
            </p>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => openEdit(food)}
                className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm"
              >
                Edit
              </button>

              {/* <button
                onClick={() => handleDeleteFood(food.id)}
                className="w-1/2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md text-sm"
              >
                Delete
              </button> */}
              <button
                onClick={() => openDeleteModal(food.id)}
                className="w-1/2 bg-red-600 text-white py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-4 py-2 border rounded-md disabled:opacity-50"
        >
          Previous
        </button>

        <span className="font-medium">Page {page}</span>

        <button
          disabled={foods.length < limit}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 border rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>


      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-sm rounded-xl p-6">
            <h2 className="text-lg font-bold mb-3">Confirm Delete</h2>
            <p className="text-sm text-gray-600">
              Are you sure you want to delete this item?
            </p>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="w-1/2 border py-2 rounded-md"
              >
                Cancel
              </button>

              <button
                onClick={confirmDeleteFood}
                className="w-1/2 bg-red-600 text-white py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VAT MODAL */}
      {showVatModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form onSubmit={handleVatSubmit} className="bg-white w-full max-w-sm rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Update VAT</h2>

            <input
              type="number"
              placeholder="VAT %"
              value={vat}
              onChange={(e) => setVat(e.target.value)}
              required
              className="w-full border px-4 py-2 rounded-md"
            />

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setShowVatModal(false)}
                className="w-1/2 border py-2 rounded-md"
              >
                Cancel
              </button>

              <button type="submit" className="w-1/2 bg-green-700 text-white py-2 rounded-md">
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      {/* FOOD MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form onSubmit={handleSubmit} className="bg-white w-full max-w-md rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">{isEdit ? 'Edit Food' : 'Create item'}</h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="item name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full border px-4 py-2 rounded-md"
              />

              <input
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                required
                className="w-full border px-4 py-2 rounded-md"
              />

              <select
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value, drinkSubCategory: '' })
                }
                className="w-full border px-4 py-2 rounded-md"
              >
                <option value="Food">Food</option>
                <option value="Extra">Extra</option>
                <option value="Drinks">Drinks</option>
              </select>

              {form.category === 'Drinks' && (
                <select
                  value={form.drinkSubCategory}
                  onChange={(e) => setForm({ ...form, drinkSubCategory: e.target.value })}
                  required
                  className="w-full border px-4 py-2 rounded-md"
                >
                  <option value="">Select drink sub-category</option>

                  {DRINK_SUB_CATEGORIES.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-1/2 border py-2 rounded-md"
              >
                Cancel
              </button>

              <button type="submit" className="w-1/2 bg-green-700 text-white py-2 rounded-md">
                {isEdit ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}