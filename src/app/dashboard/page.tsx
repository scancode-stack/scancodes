'use client';

import { useEffect, useState } from 'react';

type Food = {
  id: string;
  name: string;
  price: string;
  category: string;
};

export default function DashboardPage() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // Form state
  const [form, setForm] = useState({
    id: '',
    name: '',
    price: '',
    category: 'Food',
  });

  /* ================= GET TOKEN ================= */
  const getToken = () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('token');
  };

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
        `${process.env.NEXT_PUBLIC_API_URL}/food/all-food?page=1&limit=10`,
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

      setFoods(data.foodItems || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  /* ================= OPEN CREATE ================= */
  const openCreate = () => {
    setIsEdit(false);
    setForm({
      id: '',
      name: '',
      price: '',
      category: 'Food',
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
    });
    setShowModal(true);
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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Admin Dashboard
          </h1>
          <p className="text-gray-500">
            Manage all menu items
          </p>
        </div>

        <button
          onClick={openCreate}
          className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md text-sm font-medium"
        >
          + Add New
        </button>
      </div>

      {/* Loading / Error */}
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {/* Food Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-xl shadow-md p-4"
          >
            <div className="text-xs text-green-700 font-semibold mb-1">
              {food.category}
            </div>

            <h3 className="font-semibold text-gray-800">
              {food.name}
            </h3>

            <p className="mt-2 text-green-800 font-bold">
              ₦{Number(food.price).toLocaleString()}
            </p>

            <button
              onClick={() => openEdit(food)}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white w-full max-w-md rounded-xl p-6"
          >
            <h2 className="text-xl font-bold mb-4">
              {isEdit ? 'Edit Food' : 'Create Food'}
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Food name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
                className="w-full border px-4 py-2 rounded-md"
              />

              <input
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
                required
                className="w-full border px-4 py-2 rounded-md"
              />

              <select
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
                className="w-full border px-4 py-2 rounded-md"
              >
                <option value="Food">Food</option>
                <option value="Drinks">Drinks</option>
                <option value="Extra">Extra</option>
              </select>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-1/2 border py-2 rounded-md"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="w-1/2 bg-green-700 hover:bg-green-800 text-white py-2 rounded-md"
              >
                {isEdit ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
