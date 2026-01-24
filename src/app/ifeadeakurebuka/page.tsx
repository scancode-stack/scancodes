"use client";

import { useEffect, useState } from "react";
import { Modal, Box, Snackbar, Alert } from "@mui/material";
import Image from "next/image";

/* ================= TYPES ================= */
type MenuItem = {
  id: number;
  name: string;
  price: number;
  drinkSubCategory?: string;
};

type CartItem = MenuItem & {
  quantity: number;
};

/* ================= COMPONENT ================= */
export default function Home() {
  /* ===== MENUS ===== */
  const [foodMenu, setFoodMenu] = useState<MenuItem[]>([]);
  const [drinksMenu, setDrinksMenu] = useState<MenuItem[]>([]);
  const [extrasMenu, setExtrasMenu] = useState<MenuItem[]>([]);

  const [openMenu, setOpenMenu] =
    useState<"food" | "drinks" | "extras" | null>(null);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [openCart, setOpenCart] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const [showOrderForm, setShowOrderForm] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [seatNumber, setSeatNumber] = useState("");
  const [toastOpen, setToastOpen] = useState(false);

  /* ✅ FIXED: real drink subcategories */
  const subCategories = [
    "WINE",
    "WHISKY",
    "VODKA",
    "GIN",
    "TEQUILA",
    "COGNAC_BRANDY",
    "BEER",
    "ENERGY_DRINK_WATER",
    "MOCKTAILS_JUICE",
    "Others",
  ];

  /* ===== COMING SOON STATES ===== */
  const [showAttendants, setShowAttendantsSoon] = useState(false);
  const [showSongsSoon, setShowSongsSoon] = useState(false);
  const [showKaraokeSoon, setShowKaraokeSoon] = useState(false);
  const [showShoutoutSoon, setShowShoutoutSoon] = useState(false);

  const [openDrinkSubCategories, setOpenDrinkSubCategories] =
    useState<Record<string, boolean>>({});

  const toggleSubCategory = (sub: string) => {
    setOpenDrinkSubCategories((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const showTemporarily = (
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setState(true);
    setTimeout(() => setState(false), 1000);
  };

  /* ================= FETCH MENU ================= */
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_AUTH_API_URL}/food/all-food?page=1&limit=1000`
        );
        const data = await res.json();
        const items = data.foodItems || [];

        setFoodMenu(
          items
            .filter((i: any) => i.category?.toLowerCase() === "food")
            .map((i: any) => ({
              id: Number(i.id),
              name: i.name,
              price: Number(i.price),
            }))
        );

        setDrinksMenu(
          items
            .filter((i: any) => i.category?.toLowerCase() === "drinks")
            .map((i: any) => ({
              id: Number(i.id),
              name: i.name,
              price: Number(i.price),
              drinkSubCategory: i.drinkSubCategory || "Others",
            }))
        );

        setExtrasMenu(
          items
            .filter((i: any) => i.category?.toLowerCase() === "extra")
            .map((i: any) => ({
              id: Number(i.id),
              name: i.name,
              price: Number(i.price),
            }))
        );
      } catch (err) {
        console.error("Failed to load menu", err);
      }
    };

    fetchMenus();
  }, []);

  /* ================= CART LOGIC ================= */
  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const found = prev.find((c) => c.id === item.id);
      if (found) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) =>
      prev
        .map((c) =>
          c.id === id ? { ...c, quantity: c.quantity - 1 } : c
        )
        .filter((c) => c.quantity > 0)
    );
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const vatAmount = Math.round(totalAmount * 0.075);
  const grandTotal = totalAmount + vatAmount;

  /* ================= MENU RENDER ================= */
  const renderMenu = (items: MenuItem[]) => (
    <div className="space-y-2">
      {items.map((item) => {
        const qty =
          cart.find((c) => c.id === item.id)?.quantity || 0;

        return (
          <div
            key={item.id}
            className="bg-gray-300 rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-medium text-black">{item.name}</p>
              <p className="text-sm text-gray-800">₦{item.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => removeFromCart(item.id)}
                className="border px-2 rounded border-black text-black"
              >
                −
              </button>
              <span className="text-black">{qty}</span>
              <button
                onClick={() => addToCart(item)}
                className="border px-2 rounded border-black text-black"
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );

  /* ================= DRINKS GROUPED RENDER ================= */
  const renderDrinksMenu = () => {
    const grouped: Record<string, MenuItem[]> = {};
    subCategories.forEach((cat) => (grouped[cat] = []));

    drinksMenu.forEach((item) => {
      const key = item.drinkSubCategory || "Others";
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(item);
    });

    return (
      <div className="space-y-4">
        {Object.entries(grouped).map(([subCategory, items]) => {
          if (items.length === 0) return null;
          const isOpen = openDrinkSubCategories[subCategory] || false;

          return (
            <div key={subCategory}>
              <button
                onClick={() => toggleSubCategory(subCategory)}
                className="w-full flex justify-between items-center bg-gray-800 text-white px-4 py-2 rounded-md mb-2"
              >
                <span className="font-bold">{subCategory}</span>
                <span>{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div className="pl-4">{renderMenu(items)}</div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  /* ================= UI ================= */
  return (
    <>
      <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-white">
        <Image
          src="/akure.jpeg"
          alt="Restaurant banner"
          fill
          className="object-contain"
          priority
        />
      </div>

      <section
        className="relative p-6 min-h-screen"
        style={{ backgroundImage: "url('/bgimg.jpeg')" }}
      >
        {/* PREVIEW BUTTON */}
        <div className="fixed bottom-28 right-16 z-50">
          <button
            onClick={() => {
              setOpenCart(true);
              setIsMinimized(false);
            }}
            className="bg-black px-4 py-2 rounded-full text-orange-400 flex gap-2"
          >
            Preview
            <span>{cart.reduce((a, b) => a + b.quantity, 0)}</span>
          </button>
        </div>

        {/* MENUS */}
        <div className="max-w-md mx-auto space-y-4">
          <button
            onClick={() => setOpenMenu(openMenu === "food" ? null : "food")}
            className="w-full bg-black text-white py-6 rounded-lg"
          >
            Food Menu
          </button>
          {openMenu === "food" && renderMenu(foodMenu)}

          <button
            onClick={() =>
              setOpenMenu(openMenu === "drinks" ? null : "drinks")
            }
            className="w-full bg-black text-white py-6 rounded-lg"
          >
            Drinks Menu
          </button>
          {openMenu === "drinks" && renderDrinksMenu()}

          <button
            onClick={() =>
              setOpenMenu(openMenu === "extras" ? null : "extras")
            }
            className="w-full bg-black text-white py-6 rounded-lg"
          >
            Extras
          </button>
          {openMenu === "extras" && renderMenu(extrasMenu)}
        </div>

        {/* ✅ RESTORED BOTTOM BUTTONS */}
        <div className="flex flex-row gap-2 justify-center mt-60">
          {/* Left Column */}
          <div>
            <div className="flex flex-col items-center">
              <button
                onClick={() => showTemporarily(setShowAttendantsSoon)}
                className="bg-gray-500 text-black font-bold text-xs px-10 py-4 rounded-md"
              >
                Call Attendants
              </button>
              {showAttendants && (
                <span className="text-[12px] text-white mt-1 font-bold bg-black px-3 py-1 rounded-md">
                  Coming soon
                </span>
              )}
            </div>

            <div className="flex flex-col items-center mt-2">
              <button
                onClick={() => showTemporarily(setShowSongsSoon)}
                className="bg-gray-500 text-black font-bold text-xs px-6 py-4 rounded-md"
              >
                Special Song Request
              </button>
              {showSongsSoon && (
                <span className="text-[12px] text-white mt-1 font-bold bg-black px-3 py-1 rounded-md">
                  Coming soon
                </span>
              )}
            </div>

            <div className="flex flex-col items-center mt-2">
              <button
                onClick={() => showTemporarily(setShowSongsSoon)}
                className="bg-gray-500 text-black font-bold text-xs px-6 py-4 rounded-md w-full"
              >
                Tip
              </button>
              {showSongsSoon && (
                <span className="text-[12px] text-white mt-1 font-bold bg-black px-3 py-1 rounded-md">
                  Coming soon
                </span>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="flex flex-col items-center">
              <button
                onClick={() => showTemporarily(setShowKaraokeSoon)}
                className="bg-gray-500 text-black font-bold text-xs px-8 py-4 rounded-md"
              >
                Karaoke Song Request
              </button>
              {showKaraokeSoon && (
                <span className="text-[12px] text-white mt-1 font-bold bg-black px-3 py-1 rounded-md">
                  Coming soon
                </span>
              )}
            </div>

            <div className="flex flex-col items-center mt-2">
              <button
                onClick={() => showTemporarily(setShowShoutoutSoon)}
                className="bg-gray-500 text-black font-bold text-xs px-6 py-4 rounded-md"
              >
                Special Shout out Request
              </button>
              {showShoutoutSoon && (
                <span className="text-[12px] text-white mt-1 font-bold bg-black px-3 py-1 rounded-md">
                  Coming soon
                </span>
              )}
            </div>

            <div className="flex flex-col items-center mt-2">
              <button
                onClick={() => showTemporarily(setShowSongsSoon)}
                className="bg-gray-500 text-black font-bold text-xs px-6 py-4 rounded-md w-full"
              >
                Rating & Feedback
              </button>
              {showSongsSoon && (
                <span className="text-[12px] text-white mt-1 font-bold bg-black px-3 py-1 rounded-md">
                  Coming soon
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CART MODAL */}
      <Modal open={openCart} onClose={() => setOpenCart(false)}>
        <Box className="absolute bg-white rounded-lg p-4 top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2">
          <h2 className="font-semibold text-black mb-3">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-2"
                >
                  <p className="text-black">
                    {item.name} × {item.quantity}
                  </p>
                  <p className="text-black">
                    ₦{item.price * item.quantity}
                  </p>
                </div>
              ))}
              <div className="mt-3 text-right">
                <p>VAT: ₦{vatAmount}</p>
                <p className="font-bold">Total: ₦{grandTotal}</p>
              </div>
            </>
          )}
        </Box>
      </Modal>

      <Snackbar
        open={toastOpen}
        autoHideDuration={4000}
        onClose={() => setToastOpen(false)}
      >
        <Alert severity="success">Order sent successfully 🎉</Alert>
      </Snackbar>
    </>
  );
}
