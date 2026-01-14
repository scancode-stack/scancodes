// "use client";

// import { useState } from "react";
// import { Modal, Box, Snackbar, Alert } from "@mui/material";
// import Image from "next/image";

// /* ================= TYPES ================= */
// type MenuItem = {
//   id: number;
//   name: string;
//   price: number;
// };

// type DrinksCategory = {
//   category: string;
//   items: MenuItem[];
// };

// type CartItem = MenuItem & {
//   quantity: number;
// };

// /* ================= MENU DATA ================= */
// const foodMenu: MenuItem[] = [
//   { id: 1, name: "Big Catfish", price: 17500 },
//   { id: 2, name: "Big Tilapia", price: 20000 },
//   { id: 3, name: "Banana Bread", price: 3750 },
//   { id: 4, name: "Beef Burge", price: 8125 },
//   { id: 5, name: "Fries", price: 3000 },
  
// ];


// const DrinksMenu: DrinksCategory[] =[
//   {
//     "category": "Others",
//     "items": [
//       {
//         "id": 1,
//         "name": "19 CRIMES CHARD",
//         "price": 11250
//       },
//       {
//         "id": 4,
//         "name": "4TH STREET SPARKLING RED GRAPE",
//         "price": 6250
//       },
     
      
//       {
//         "id": 516,
//         "name": "jack Daniel apple",
//         "price": 33000
//       }
//     ]
//   },
//   {
//     "category": "Wine & Champagne",
//     "items": [
      
//       {
//         "id": 101,
//         "name": "CRICOVA muscat white",
//         "price": 17500
//       },
//       {
//         "id": 111,
//         "name": "Carlo Rossi Rose",
//         "price": 10625
//       },
//       {
//         "id": 142,
//         "name": "Cricova Premium Cuvee Brut",
//         "price": 117500
//       },
//       {
//         "id": 143,
//         "name": "Cricova Rose",
//         "price": 19000
//       },
  
//       {
//         "id": 197,
//         "name": "Four Cousins Rose",
//         "price": 9375
//       },
//       {
//         "id": 200,
//         "name": "Friends and Family Merlot",
//         "price": 10125
//       },
//       {
//         "id": 201,
//         "name": "Friends and Family Rose",
//         "price": 10125
//       },
//       {
//         "id": 205,
//         "name": "Frontera Cabernet Sauvignon",
//         "price": 10625
//       },
    
//     ]
//   },
//   {
//     "category": "Vodka / Gin / Rum / Tequila",
//     "items": [
//       {
//         "id": 15,
//         "name": "Agavales tequila",
//         "price": 16500
//       },
      
//       {
//         "id": 156,
//         "name": "Dead man's Finger Coconut Rum",
//         "price": 18750
//       },
      
//       {
//         "id": 514,
//         "name": "belvedere vodka",
//         "price": 56250
//       },
//       {
//         "id": 520,
//         "name": "virgin Sunrise",
//         "price": 5000
//       }
//     ]
//   },
//   {
//     "category": "Extras / Add-ons",
//     "items": [
//       {
//         "id": 45,
//         "name": "Bacardi Spice",
//         "price": 20000
//       },
//       {
//         "id": 95,
//         "name": "CHIVITA juice",
//         "price": 5000
//       },
//       {
//         "id": 161,
//         "name": "Dead man's Finger Spiced",
//         "price": 18750
//       },
//       {
//         "id": 177,
//         "name": "EXTRA GROUNDNUT",
//         "price": 2140
//       },
//       {
//         "id": 178,
//         "name": "EXTRA HONEY",
//         "price": 1063
//       },
//       {
//         "id": 179,
//         "name": "EXTRA LEMON",
//         "price": 576
//       },
//       {
//         "id": 187,
//         "name": "Extra plantain",
//         "price": 1000
//       },
    
//       {
//         "id": 398,
//         "name": "Plained Iced Latte",
//         "price": 3750
//       },
      
//       {
//         "id": 441,
//         "name": "Silk and Spiced",
//         "price": 20000
//       }
//     ]
//   },
//   {
//     "category": "Beer & Soft Drinks",
//     "items": [
//       {
//         "id": 457,
//         "name": "Star radler",
//         "price": 2000
//       },
      
//       {
//         "id": 429,
//         "name": "SPRITE PLASTIC 50CL",
//         "price": 1000
//       }
//     ]
//   },
//   {
//     "category": "Whisky / Cognac / Brandy",
//     "items": [
//       {
//         "id": 166,
//         "name": "Dewars",
//         "price": 33250
//       },
  
//       {
//         "id": 234,
//         "name": "Glenmorangie Lasanta 12yrs",
//         "price": 64375
//       },
//       {
//         "id": 235,
//         "name": "Glenmorangie Quinta 14yrs",
//         "price": 82500
//       },
//       {
//         "id": 236,
//         "name": "Glenmorangie nectar dor",
//         "price": 97350
//       },
//       {
//         "id": 252,
//         "name": "HENNESSY SHOT",
//         "price": 6000
//       },
//       {
//         "id": 253,
//         "name": "HENNESSY VSOP",
//         "price": 120500
//       },
//       {
//         "id": 254,
//         "name": "HENNESSY VSOP 1L",
//         "price": 150000
//       },
//       {
//         "id": 258,
//         "name": "Hennessy VS 70CL",
//         "price": 64250
//       },
//       {
//         "id": 259,
//         "name": "Hennessy XO",
//         "price": 444500
//       },
//       {
//         "id": 274,
//         "name": "JOHNNIE WALKER 18 yrs",
//         "price": 165000
//       },
//       {
//         "id": 290,
//         "name": "Johnnie walker Blonde",
//         "price": 28000
//       },
      
//       {
//         "id": 471,
//         "name": "Teeling whiskey single malt",
//         "price": 87500
//       },
      
//     ]
//   },
//   {
//     "category": "Cocktails & Mocktails",
//     "items": [
//       {
//         "id": 174,
//         "name": "Double Espresso",
//         "price": 3125
//       },
//       {
//         "id": 445,
//         "name": "Singleton signature cocktail",
//         "price": 13750
//       },
//       {
//         "id": 517,
//         "name": "kamankazy",
//         "price": 10000
//       }
//     ]
//   },
  
// ]



// const extrasMenu: MenuItem[] = [
//   { id: 91, name: "Shisha (Single Flavor)", price: 8000 },
//   { id: 92, name: "Shisha (Double Flavor)", price: 10000 },
//   { id: 93, name: "Shisha Refill", price: 5000 },
//   { id: 94, name: "Extra Coal", price: 1500 },
//   { id: 95, name: "broken shisha pot", price: 38750 },
// ];

// export default function Home() {
//   const [openMenu, setOpenMenu] =
//     useState<"food" | "drinks" | "extras" | null>(null);
//   const [openDrinkSub, setOpenDrinkSub] = useState<string | null>(null);
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [openCart, setOpenCart] = useState(false);
//   const [isMinimized, setIsMinimized] = useState(false);

//   const [showOrderForm, setShowOrderForm] = useState(false);
//   const [customerName, setCustomerName] = useState("");
//   const [seatNumber, setSeatNumber] = useState("");
//   const [toastOpen, setToastOpen] = useState(false);

//   /* ===== NEW STATES ===== */
//   const [openAttendantModal, setOpenAttendantModal] = useState(false);
//   const [attendantTable, setAttendantTable] = useState("");
//   const [attendantRequest, setAttendantRequest] = useState("");
//   const [showAttendants, setShowAttendantsSoon] = useState(false);
//   const [showSongsSoon, setShowSongsSoon] = useState(false);
// const [showKaraokeSoon, setShowKaraokeSoon] = useState(false);
// const [showShoutoutSoon, setShowShoutoutSoon] = useState(false);

// const [openCategory, setOpenCategory] = useState<string | null>(null);

// const toggleCategory = (category: string) => {
//   setOpenCategory((prev) => (prev === category ? null : category));
// };


// const showTemporarily = (setState: React.Dispatch<React.SetStateAction<boolean>>) => {
//   setState(true);
//   setTimeout(() => {
//     setState(false);
//   }, 1000); // 1 second
// };



//   /* ================= CART LOGIC ================= */
//   const addToCart = (item: MenuItem) => {
//     setCart((prev) => {
//       const found = prev.find((c) => c.id === item.id);
//       if (found) {
//         return prev.map((c) =>
//           c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
//         );
//       }
//       return [...prev, { ...item, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id: number) => {
//     setCart((prev) =>
//       prev
//         .map((c) =>
//           c.id === id ? { ...c, quantity: c.quantity - 1 } : c
//         )
//         .filter((c) => c.quantity > 0)
//     );
//   };

//   const totalAmount = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const vatRate = 0.075;
//   const vatAmount = Math.round(totalAmount * vatRate);
//   const grandTotal = totalAmount + vatAmount;

//   /* ================= MENU RENDER ================= */
  


//   const renderMenu = (data: MenuItem[] | DrinksCategory[]) => (
//   <div className="space-y-1">
//     {data.map((entry) => {
//       // ✅ DRINKS CATEGORY (SUB-MENU)
//       if ("category" in entry) {
//         const isOpen = openCategory === entry.category;

//         return (
//           <div key={entry.category}>
//             {/* CATEGORY HEADER */}
//             <button
//               onClick={() => toggleCategory(entry.category)}
//               className="w-full flex justify-between items-center bg-gray-700 text-white p-3 rounded-md"
//             >
//               <h3 className="text-lg font-bold">{entry.category}</h3>
//               <span className="text-xl">{isOpen ? "−" : "+"}</span>
//             </button>

//             {/* CATEGORY ITEMS */}
//             {isOpen && (
//               <div className="bg-gray-300 rounded-lg p-4 space-y-3 ">
//                 {entry.items.map((item) => {
//                   const qty =
//                     cart.find((c) => c.id === item.id)?.quantity || 0;

//                   return (
//                     <div
//                       key={item.id}
//                       className="flex justify-between items-center"
//                     >
//                       <div>
//                         <p className="font-medium text-black">
//                           {item.name}
//                         </p>
//                         <p className="text-sm text-gray-800">
//                           ₦{item.price}
//                         </p>
//                       </div>

//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => removeFromCart(item.id)}
//                           className="border px-2 rounded border-black text-black"
//                         >
//                           −
//                         </button>
//                         <span className="text-black">{qty}</span>
//                         <button
//                           onClick={() => addToCart(item)}
//                           className="border px-2 rounded border-black text-black"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         );
//       }

//       // ✅ FOOD / EXTRAS (FLAT ITEMS)
//       const item = entry as MenuItem;
//       const qty = cart.find((c) => c.id === item.id)?.quantity || 0;

//       return (
//         <div
//           key={item.id}
//           className="bg-gray-300 rounded-lg p-4 space-y-3"
//         >
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="font-medium text-black">{item.name}</p>
//               <p className="text-sm text-gray-800">₦{item.price}</p>
//             </div>

//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="border px-2 rounded border-black text-black"
//               >
//                 −
//               </button>
//               <span className="text-black">{qty}</span>
//               <button
//                 onClick={() => addToCart(item)}
//                 className="border px-2 rounded border-black text-black"
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// );


//   /* ================= WHATSAPP ORDER ================= */
//   const handleWhatsAppOrder = () => {
//     const itemsText = cart
//       .map(
//         (item) =>
//           `${item.name} x${item.quantity} - ₦${
//             item.price * item.quantity
//           }`
//       )
//       .join("\n");

//     const message = `New Order 🍽️
// Name: ${customerName}
// Seat Number: ${seatNumber}

// Order Items:
// ${itemsText}

// VAT (7.5%): ₦${vatAmount}
// Total: ₦${grandTotal}`;

//     const phone = "2348021999995";
//     window.open(
//       `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
//       "_blank"
//     );

//     setToastOpen(true);
//     setCart([]);
//     setCustomerName("");
//     setSeatNumber("");
//     setShowOrderForm(false);
//     setOpenCart(false);
//   };

//   /* ================= UI ================= */
//   return (
//     <>
//     <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-white">
//     <Image
//       src="/logos.jpeg"
//       alt="Restaurant banner"
//       fill
//       className="object-contain"
//       priority
//     />
//   </div>
//       <section
//         className="relative  bg-contain  p-6  min-h-screen"
//         style={{ backgroundImage: "url('/bgimg.jpeg')" }}

        
//       >
        
//         {/* PREVIEW + NEW ROW BUTTONS */}
//         <div className="fixed bottom-28 right-16 z-50 space-y-2">
//           <button
//             onClick={() => {
//               setOpenCart(true);
//               setIsMinimized(false);
//             }}
//             className="bg-black px-4 py-2 rounded-full text-orange-400 flex gap-2"
//           >
//             Preview
//             <span>{cart.reduce((a, b) => a + b.quantity, 0)}</span>
//           </button>

//           {/* NEW ROW */}
          
//         </div>

//         {/* MENUS (UNCHANGED) */}
//         <div className="max-w-md mx-auto mt-1 space-y-4">
//           <button
//             onClick={() =>
//               setOpenMenu(openMenu === "food" ? null : "food")
//             }
//             className="w-full bg-black text-white py-6 rounded-lg"
//           >
//             Food Menu
//           </button>
//           {openMenu === "food" && renderMenu(foodMenu)}

//           {/* <button
//             onClick={() =>
//               setOpenMenu(openMenu === "drinks" ? null : "drinks")
//             }
//             className="w-full bg-black text-white py-6 rounded-lg"
//           >
//             Drinks Menu
//           </button>

//           {openMenu === "drinks" && (
//             <div className="space-y-3">
//               {Object.entries(drinksSubMenus).map(([title, items]) => (
//                 <div key={title}>
//                   <button
//                     onClick={() =>
//                       setOpenDrinkSub(
//                         openDrinkSub === title ? null : title
//                       )
//                     }
//                     className="w-full bg-gray-800 text-white py-2 rounded-lg"
//                   >
//                     {title}
//                   </button>
//                   {openDrinkSub === title && renderMenu(items)}
//                 </div>
//               ))}
//             </div>
//           )} */}

//             <button
//   onClick={() =>
//     setOpenMenu(openMenu === "drinks" ? null : "drinks")
//   }
//   className="w-full bg-black text-white py-6 rounded-lg"
// >
//   Drinks Menu
// </button>

// {openMenu === "drinks" && renderMenu(DrinksMenu)}

            



//           <button
//             onClick={() =>
//               setOpenMenu(openMenu === "extras" ? null : "extras")
//             }
//             className="w-full bg-black text-white py-6 rounded-lg"
//           >
//             Extras
//           </button>
//           {openMenu === "extras" && renderMenu(extrasMenu)}
//         </div>



//         <div className="flex flex-row gap-2 justify-center mt-60">

//        <div>
//         {/* Call Attendants */}
//         <div className="flex flex-col items-center">
//           <button
//             onClick={() => showTemporarily(setShowAttendantsSoon)}
//             className="bg-gray-500 text-black font-bold text-xs px-10 py-4 rounded-md"
//           >
//             Call Attendants
//           </button>

//           {showAttendants && (
//             <span className="text-[12px] text-white mt-1 font-bold bg-black px-3 py-1 rounded-md">
//               Coming soon
//             </span>
//           )}
//         </div>

//         {/* Special Song */}
//         <div className="flex flex-col items-center mt-2">
//           <button
//             onClick={() => showTemporarily(setShowSongsSoon)}
//             className="bg-gray-500 text-black font-bold text-xs px-6 py-4 rounded-md"
//           >
//             Special Song Request
//           </button>

//           {showSongsSoon && (
//             <span className="text-[12px] text-white mt-1 font-bold bg-black px-3 py-1 rounded-md">
//               Coming soon
//             </span>
//           )}
//         </div>

//         <div className="flex flex-col items-center mt-2">
//           <button
//             onClick={() => showTemporarily(setShowSongsSoon)}
//             className="bg-gray-500 text-black font-bold text-xs px-6 py-4 rounded-md w-full"
//           >
//             Tip
//           </button>

//           {showSongsSoon && (
//             <span className="text-[12px] text-white mt-1 font-bold bg-black px-3 py-1 rounded-md">
//               Coming soon
//             </span>
//           )}
//         </div>

        
//       </div>

//       {/* Right Column */}
//       <div>
//         {/* Karaoke */}
//         <div className="flex flex-col items-center">
//           <button
//             onClick={() => showTemporarily(setShowKaraokeSoon)}
//             className="bg-gray-500 text-black font-bold text-xs px-8 py-4 rounded-md"
//           >
//             Karaoke Song Request
//           </button>

//           {showKaraokeSoon && (
//             <span className="text-[12px] text-white mt-1 font-bold bg-black px-3 py-1 rounded-md">
//               Coming soon
//             </span>
//           )}
//         </div>

//         {/* Shout Out */}
//         <div className="flex flex-col items-center mt-2">
//           <button
//             onClick={() => showTemporarily(setShowShoutoutSoon)}
//             className="bg-gray-500 text-black font-bold text-xs px-6 py-4 rounded-md"
//           >
//             Special Shout out Request
//           </button>

//           {showShoutoutSoon && (
//             <span className="text-[12px] text-white mt-1 font-bold bg-black px-3 py-1 rounded-md">
//               Coming soon
//             </span>
//           )}
//         </div>

//         <div className="flex flex-col items-center mt-2">
//           <button
//             onClick={() => showTemporarily(setShowSongsSoon)}
//             className="bg-gray-500 text-black font-bold text-xs px-6 py-4 rounded-md w-full"
//           >
//             Rating & Feedback
//           </button>

//           {showSongsSoon && (
//             <span className="text-[12px] text-white mt-1 font-bold bg-black px-3 py-1 rounded-md">
//               Coming soon
//             </span>
//           )}
//         </div>
//       </div>
// </div>


//       </section>



      

            

//       {/* CALL ATTENDANT MODAL */}
//       <Modal
//         open={openAttendantModal}
//         onClose={() => setOpenAttendantModal(false)}
//       >
//         <Box className="absolute bg-white rounded-lg p-4 top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 space-y-3">

//         <button
//       onClick={() => setOpenAttendantModal(false)}
//       className="absolute top-2 right-2 text-black text-lg font-bold"
//       aria-label="Close"
//     >
//       ×
//     </button>

//           <h2 className="font-semibold text-black">Call Attendant</h2>

//           <select
//   value={seatNumber}
//   onChange={(e) => setSeatNumber(e.target.value)}
//   className="w-full px-3 py-2 rounded border border-black bg-white text-black"
// >
//   <option value="" disabled>
//     Select Table Number
//   </option>
//   {Array.from({ length: 10 }, (_, i) => (
//     <option key={i + 1} value={i + 1}>
//       Table {i + 1}
//     </option>
//   ))}
// </select>

//           <textarea
//             value={attendantRequest}
//             onChange={(e) => setAttendantRequest(e.target.value)}
//             placeholder="Your request"
//             className="w-full px-3 py-2 border rounded border-black text-black"
//           />

//           <button
//             disabled={!attendantTable || !attendantRequest}
//             onClick={() => {
//               const message = `Call Attendant 🚨
// Table: ${attendantTable}
// Request: ${attendantRequest}`;

//               window.open(
//                 `https://wa.me/2348021999995?text=${encodeURIComponent(
//                   message
//                 )}`,
//                 "_blank"
//               );

//               setOpenAttendantModal(false);
//               setAttendantTable("");
//               setAttendantRequest("");
//             }}
//             className="w-full bg-green-600 text-white py-2 rounded disabled:opacity-50"
//           >
//             Send Request
//           </button>
//         </Box>
//       </Modal>

//       {/* CART MODAL (UNCHANGED) */}
//       {/* CART MODAL */}
// <Modal open={openCart} onClose={() => setOpenCart(false)}>
//   <Box className="absolute bg-white rounded-lg p-4 top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2">
//     <div className="flex justify-between items-center mb-3">
//       <h2 className="font-semibold text-black">Your Cart</h2>
//       <button
//         onClick={() => {
//           setIsMinimized(true);
//           setOpenCart(false);
//         }}
//         className="border px-2 rounded"
//       >
//          ×
//       </button>
//     </div>

//     {cart.length === 0 ? (
//       <p className="text-gray-500">Cart is empty</p>
//     ) : (
//       <>
//         {cart.map((item) => (
//           <div
//             key={item.id}
//             className="flex justify-between items-center mb-2"
//           >
//             <div>
//               <p className="font-medium text-black ">{item.name}</p>
//               <p className="text-sm text-black">
//                 ₦{item.price} × {item.quantity}
//               </p>
//             </div>
//             {/* <div className="flex gap-2">
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="border px-2 rounded border-black text-black"
//               >
//                 −
//               </button>
//               <span className="text-black">{item.quantity}</span>
//               <button
//                 onClick={() => addToCart(item)}
//                 className="border px-2 rounded border-black text-black"
//               >
//                 +
//               </button>
//             </div> */}
//           </div>
//         ))}

//         <div className="mt-3 space-y-1 text-right">
//           <p className="text-sm text-black">
//             VAT (7.5%): ₦{vatAmount}
//           </p>
//           <p className="font-semibold text-black">
//             Total: ₦{grandTotal}
//           </p>
//         </div>

//         {/* {!showOrderForm ? (
//           <button
//             onClick={() => setShowOrderForm(true)}
//             className="mt-4 w-full bg-green-600 text-white py-2 rounded"
//           >
//             Place Order
//           </button>
//         ) : (
//           <div className="mt-4 space-y-3">
//             <input
//               value={customerName}
//               onChange={(e) => setCustomerName(e.target.value)}
//               placeholder="Your Name"
//               className="w-full px-3 py-2 rounded border border-black"
//             />
            
//             <select
//   value={seatNumber}
//   onChange={(e) => setSeatNumber(e.target.value)}
//   className="w-full px-3 py-2 rounded border border-black bg-white text-black"
// >
//   <option value="" disabled>
//     Select Table Number
//   </option>
//   {Array.from({ length: 10 }, (_, i) => (
//     <option key={i + 1} value={i + 1}>
//       Table {i + 1}
//     </option>
//   ))}
// </select>

//             <button
//               disabled={!customerName || !seatNumber}
//               onClick={handleWhatsAppOrder}
//               className="w-full bg-green-700 text-white py-2 rounded disabled:opacity-50"
//             >
//               Confirm & Send to WhatsApp
//             </button>
//           </div>
//         )} */}
//       </>
//     )}
//   </Box>
// </Modal>


//       <Snackbar
//         open={toastOpen}
//         autoHideDuration={4000}
//         onClose={() => setToastOpen(false)}
//       >
//         <Alert severity="success">Order sent successfully 🎉</Alert>
//       </Snackbar>
//     </>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { Modal, Box, Snackbar, Alert } from "@mui/material";
import Image from "next/image";

/* ================= TYPES ================= */
type MenuItem = {
  id: number;
  name: string;
  price: number;
};

type CartItem = MenuItem & {
  quantity: number;
};

/* ================= COMPONENT ================= */
export default function Home() {
  /* ===== MENUS (NOW DYNAMIC) ===== */
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

  /* ===== COMING SOON STATES ===== */
  const [showAttendants, setShowAttendantsSoon] = useState(false);
  const [showSongsSoon, setShowSongsSoon] = useState(false);
  const [showKaraokeSoon, setShowKaraokeSoon] = useState(false);
  const [showShoutoutSoon, setShowShoutoutSoon] = useState(false);

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
          `${process.env.NEXT_PUBLIC_API_URL}/food/all-food?page=1&limit=200`
        );
        const data = await res.json();

        const items = data.foodItems || [];

        setFoodMenu(
          items
            .filter((i: any) => i.category === "Food")
            .map((i: any) => ({
              id: Number(i.id),
              name: i.name,
              price: Number(i.price),
            }))
        );

        setDrinksMenu(
          items
            .filter((i: any) => i.category === "Drinks")
            .map((i: any) => ({
              id: Number(i.id),
              name: i.name,
              price: Number(i.price),
            }))
        );

        setExtrasMenu(
          items
            .filter((i: any) => i.category === "Extra")
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

  /* ================= UI ================= */
  return (
    <>
      <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-white">
        <Image
          src="/logos.jpeg"
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
            onClick={() => setOpenMenu(openMenu === "drinks" ? null : "drinks")}
            className="w-full bg-black text-white py-6 rounded-lg"
          >
            Drinks Menu
          </button>
          {openMenu === "drinks" && renderMenu(drinksMenu)}

          <button
            onClick={() => setOpenMenu(openMenu === "extras" ? null : "extras")}
            className="w-full bg-black text-white py-6 rounded-lg"
          >
            Extras
          </button>
          {openMenu === "extras" && renderMenu(extrasMenu)}
        </div>

        {/* BOTTOM BUTTONS (ALL RESTORED) */}
        <div className="flex flex-row gap-2 justify-center mt-60">

       <div>
        {/* Call Attendants */}
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

        {/* Special Song */}
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
        {/* Karaoke */}
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

        {/* Shout Out */}
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

      {/* CART MODAL (UNCHANGED) */}
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
