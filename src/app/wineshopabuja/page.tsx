"use client";

import { useState } from "react";
import { Modal, Box, Snackbar, Alert } from "@mui/material";
import Image from "next/image";

/* ================= TYPES ================= */
type MenuItem = {
  id: number;
  name: string;
  price: number;
};

type DrinksCategory = {
  category: string;
  items: MenuItem[];
};

type CartItem = MenuItem & {
  quantity: number;
};

/* ================= MENU DATA ================= */
const foodMenu: MenuItem[] = [
  { id: 1, name: "Big Catfish", price: 17500 },
  { id: 2, name: "Big Tilapia", price: 20000 },
  { id: 3, name: "Banana Bread", price: 3750 },
  { id: 4, name: "Beef Burge", price: 8125 },
  { id: 5, name: "Fries", price: 3000 },
  // { id: 6, name: "BBQ Chicken Pizza", price: 7000 },
  // { id: 7, name: "Grilled Chicken", price: 5500 },
  // { id: 8, name: "Fried Chicken & Chips", price: 5200 },
  // { id: 9, name: "Jollof Rice & Chicken", price: 4500 },
  // { id: 10, name: "Fried Rice & Beef", price: 4700 },
  // { id: 11, name: "Spaghetti Bolognese", price: 4800 },
  // { id: 12, name: "Chicken Shawarma", price: 3500 },
];


const DrinksMenu: DrinksCategory[] =[
  {
    "category": "Others",
    "items": [
      {
        "id": 1,
        "name": "19 CRIMES CHARD",
        "price": 11250
      },
      {
        "id": 4,
        "name": "4TH STREET SPARKLING RED GRAPE",
        "price": 6250
      },
      {
        "id": 5,
        "name": "4th Street Red",
        "price": 10625
      },
      {
        "id": 6,
        "name": "4th Street White",
        "price": 6250
      },
      {
        "id": 7,
        "name": "ACE bitters",
        "price": 2500
      },
      {
        "id": 8,
        "name": "AVION RESERVA(cristalino)",
        "price": 322125
      },
      {
        "id": 9,
        "name": "Absolute Elyx",
        "price": 37500
      },
      {
        "id": 10,
        "name": "Absolute Mandrin",
        "price": 23750
      },
      {
        "id": 11,
        "name": "Absolute Plain",
        "price": 23125
      },
      {
        "id": 12,
        "name": "Absolute Rapsberry",
        "price": 23750
      },
      {
        "id": 13,
        "name": "Absolute Vanilla",
        "price": 23750
      },
      {
        "id": 14,
        "name": "Ace of Spade",
        "price": 726000
      },
      {
        "id": 16,
        "name": "Agor",
        "price": 10625
      },
      {
        "id": 17,
        "name": "Almond Cookies",
        "price": 3125
      },
      {
        "id": 18,
        "name": "Amabile Red",
        "price": 9750
      },
      {
        "id": 20,
        "name": "Amabile White",
        "price": 9750
      },
      {
        "id": 21,
        "name": "Amarula 700ML",
        "price": 16000
      },
      {
        "id": 22,
        "name": "American Honey",
        "price": 31875
      },
      {
        "id": 23,
        "name": "Americano",
        "price": 3750
      },
      {
        "id": 24,
        "name": "Amstel Malta",
        "price": 1250
      },
      {
        "id": 27,
        "name": "Aperol",
        "price": 20000
      },
      {
        "id": 28,
        "name": "Apothic Red",
        "price": 17500
      },
      {
        "id": 29,
        "name": "Arrabella Red",
        "price": 16875
      },
      {
        "id": 30,
        "name": "Azul clase",
        "price": 405000
      },
      {
        "id": 31,
        "name": "B & G ( Cuvee Sp\u00e9ciale)",
        "price": 8125
      },
      {
        "id": 32,
        "name": "B&G Cuvee Speciale nature sweet",
        "price": 11625
      },
      {
        "id": 33,
        "name": "BAILEYS SHOT",
        "price": 5625
      },
      {
        "id": 34,
        "name": "BAIN'S",
        "price": 25625
      },
      {
        "id": 35,
        "name": "BALLANTINES FINEST",
        "price": 18750
      },
      {
        "id": 36,
        "name": "BALVENIE 12YRS",
        "price": 104250
      },
      {
        "id": 37,
        "name": "BALVENIE 14YRS",
        "price": 162500
      },
      {
        "id": 38,
        "name": "BELAIRE RARE LUXE",
        "price": 55000
      },
      {
        "id": 39,
        "name": "BLACK BULLET",
        "price": 2500
      },
      {
        "id": 40,
        "name": "BLUE CURACAO",
        "price": 26250
      },
      {
        "id": 41,
        "name": "BOTTLE WATER",
        "price": 500
      },
      {
        "id": 42,
        "name": "BROKEN GLASS",
        "price": 3000
      },
      {
        "id": 43,
        "name": "BUDWEISER",
        "price": 2000
      },
      {
        "id": 44,
        "name": "Bacardi Gold",
        "price": 23000
      },
      {
        "id": 46,
        "name": "Bacardi White",
        "price": 21150
      },
      {
        "id": 47,
        "name": "Bacchus",
        "price": 7500
      },
      {
        "id": 48,
        "name": "Baileys",
        "price": 27250
      },
      {
        "id": 49,
        "name": "Ballentine's shot",
        "price": 4375
      },
      {
        "id": 50,
        "name": "Balvanie classic",
        "price": 125000
      },
      {
        "id": 51,
        "name": "Balvenie 16yrs",
        "price": 354450
      },
      {
        "id": 52,
        "name": "Balvenie 21yrs",
        "price": 585000
      },
      {
        "id": 53,
        "name": "Bamoc 58 Red",
        "price": 10625
      },
      {
        "id": 54,
        "name": "Bamoc 58 Sweet Red",
        "price": 10625
      },
      {
        "id": 55,
        "name": "Banana Bread",
        "price": 3750
      },
      {
        "id": 56,
        "name": "Beef Burger",
        "price": 8125
      },
      {
        "id": 58,
        "name": "Belaire Gold with Light",
        "price": 70875
      },
      {
        "id": 59,
        "name": "Belaire Gold without Light",
        "price": 55000
      },
      {
        "id": 62,
        "name": "Belena Red",
        "price": 29250
      },
      {
        "id": 63,
        "name": "Belena White",
        "price": 26250
      },
      {
        "id": 65,
        "name": "Best Cream",
        "price": 10000
      },
      // {
      //   "id": 66,
      //   "name": "Big Catfish",
      //   "price": 17500
      // },
      {
        "id": 67,
        "name": "Big Remy Martins VSOP 1L",
        "price": 150000
      },
      // {
      //   "id": 68,
      //   "name": "Big Tilapia",
      //   "price": 20000
      // },
      {
        "id": 69,
        "name": "Black & White",
        "price": 21250
      },
      {
        "id": 70,
        "name": "Black Label",
        "price": 53750
      },
      {
        "id": 71,
        "name": "Black Star",
        "price": 19500
      },
      {
        "id": 72,
        "name": "Blue Label",
        "price": 562500
      },
      {
        "id": 73,
        "name": "Blue Nun Cab Sauvignon",
        "price": 11250
      },
      {
        "id": 74,
        "name": "Blue Nun Gold",
        "price": 41250
      },
      {
        "id": 76,
        "name": "Blue nun Silver",
        "price": 25000
      },
      {
        "id": 77,
        "name": "Bombay Saphire",
        "price": 27500
      },
      {
        "id": 79,
        "name": "Bottega Chocolate",
        "price": 29750
      },
      {
        "id": 80,
        "name": "Bottega Gold Big",
        "price": 77500
      },
      {
        "id": 81,
        "name": "Bottega Limoncina",
        "price": 23598
      },
      {
        "id": 82,
        "name": "Bottega Moscato",
        "price": 25882
      },
      {
        "id": 84,
        "name": "Bruichladdich",
        "price": 87500
      },
      {
        "id": 85,
        "name": "Buen amingo",
        "price": 20625
      },
      {
        "id": 86,
        "name": "Bushmills",
        "price": 36250
      },
      {
        "id": 87,
        "name": "CARBON BLACK",
        "price": 246750
      },
      {
        "id": 88,
        "name": "CARBON BLUE",
        "price": 212405
      },
      {
        "id": 89,
        "name": "CARBON PINK",
        "price": 284325
      },
      {
        "id": 90,
        "name": "CASA MAESTRI REPOSADO",
        "price": 122625
      },
      {
        "id": 91,
        "name": "CHAMDOR RED",
        "price": 6250
      },
      {
        "id": 92,
        "name": "CHAMDOR WHITE",
        "price": 6250
      },
      {
        "id": 93,
        "name": "CHIVAS 12YRS",
        "price": 40875
      },
      {
        "id": 94,
        "name": "CHIVAS 15YRS",
        "price": 74375
      },
      {
        "id": 96,
        "name": "CIROC (red berry)",
        "price": 57750
      },
      {
        "id": 100,
        "name": "CRAN BERRY",
        "price": 1500
      },
      {
        "id": 102,
        "name": "CRISTAL ( LOUIS ROEDERER )",
        "price": 712500
      },
      {
        "id": 103,
        "name": "Camino Real",
        "price": 29300
      },
      {
        "id": 104,
        "name": "Campari (small)",
        "price": 9375
      },
      {
        "id": 105,
        "name": "Campari Big 1L",
        "price": 37500
      },
      {
        "id": 106,
        "name": "Cappucino",
        "price": 3750
      },
      {
        "id": 107,
        "name": "Caramel Frappucino ",
        "price": 6875
      },
      {
        "id": 108,
        "name": "Caramel Latte",
        "price": 5625
      },
      
      {
        "id": 115,
        "name": "Casa maestri anejo",
        "price": 166275
      },
      {
        "id": 116,
        "name": "Casamigos Gold",
        "price": 181250
      },
      {
        "id": 117,
        "name": "Casamigos Silver 1ltr",
        "price": 187500
      },
      {
        "id": 118,
        "name": "Castillo Grande",
        "price": 6000
      },
      {
        "id": 119,
        "name": "Castillo Sweet Red",
        "price": 9000
      },
      {
        "id": 120,
        "name": "Castilo Red",
        "price": 10625
      },
      {
        "id": 122,
        "name": "Chapman Mocktail",
        "price": 5000
      },
      {
        "id": 123,
        "name": "Chervre D' elena Premium",
        "price": 15000
      },
      {
        "id": 124,
        "name": "Chicken Burger",
        "price": 7500
      },
      {
        "id": 125,
        "name": "Chicken Wings",
        "price": 10625
      },
      {
        "id": 126,
        "name": "Chivas 18 yrs",
        "price": 215000
      },
      {
        "id": 127,
        "name": "Chocolate Martini",
        "price": 6250
      },
      {
        "id": 128,
        "name": "Chocolate Vanilla Milkshake",
        "price": 6875
      },
      {
        "id": 129,
        "name": "Ciroc pineapple",
        "price": 70000
      },
      {
        "id": 130,
        "name": "Ciroc plain",
        "price": 46250
      },
      {
        "id": 131,
        "name": "Claymore",
        "price": 17500
      },
      {
        "id": 132,
        "name": "Cloudy Bay RED",
        "price": 43125
      },
      {
        "id": 133,
        "name": "Cloudy Bay white",
        "price": 34375
      },
      {
        "id": 134,
        "name": "Club Sandwich",
        "price": 7500
      },
      {
        "id": 135,
        "name": "Copper and Thief",
        "price": 56250
      },
      {
        "id": 136,
        "name": "Cosmopolitan",
        "price": 10000
      },
      {
        "id": 137,
        "name": "Cricova Amplius",
        "price": 215000
      },
      {
        "id": 138,
        "name": "Cricova Codru",
        "price": 44500
      },
      {
        "id": 139,
        "name": "Cricova Cuvee Prestige",
        "price": 65000
      },
      {
        "id": 140,
        "name": "Cricova Feteasca Neagra",
        "price": 44500
      },
      {
        "id": 141,
        "name": "Cricova Lacrima Dulce",
        "price": 22050
      },
      {
        "id": 144,
        "name": "Cricova Vin Sec Roz",
        "price": 44500
      },
      {
        "id": 145,
        "name": "Cricova XO",
        "price": 350000
      },
      {
        "id": 146,
        "name": "Cucumber Gimlet",
        "price": 6250
      },
      {
        "id": 147,
        "name": "Cuervo Gold",
        "price": 27500
      },
      {
        "id": 148,
        "name": "Cuervo White",
        "price": 27500
      },
      {
        "id": 149,
        "name": "D'usse",
        "price": 118750
      },
      {
        "id": 150,
        "name": "DESPERADOS",
        "price": 2500
      },
      {
        "id": 151,
        "name": "DOUBLE  DOUBLE",
        "price": 8201
      },
      {
        "id": 152,
        "name": "DROSTY HOF",
        "price": 12750
      },
      {
        "id": 154,
        "name": "Dead Man finger Mango",
        "price": 18750
      },
      {
        "id": 162,
        "name": "Declan Red",
        "price": 10625
      },
      {
        "id": 163,
        "name": "Declan Sparkling",
        "price": 8750
      },
      {
        "id": 164,
        "name": "Declan White",
        "price": 10625
      },
      {
        "id": 165,
        "name": "Dewar's 15yrs",
        "price": 65250
      },
      {
        "id": 169,
        "name": "Domino Red",
        "price": 6287
      },
      {
        "id": 173,
        "name": "Dornfelder",
        "price": 13125
      },
      {
        "id": 180,
        "name": "Eko",
        "price": 11500
      },
      {
        "id": 181,
        "name": "Element",
        "price": 58750
      },
      {
        "id": 182,
        "name": "Escodo Rojo Red",
        "price": 30000
      },
      {
        "id": 183,
        "name": "Espolon blanco",
        "price": 41750
      },
      {
        "id": 184,
        "name": "Expression Mojito",
        "price": 12500
      },
      {
        "id": 185,
        "name": "Expression Red",
        "price": 8750
      },
      {
        "id": 186,
        "name": "Expression White",
        "price": 8625
      },
      {
        "id": 189,
        "name": "FAYROUZ CAN BOTTLE",
        "price": 1000
      },
      {
        "id": 191,
        "name": "FischBorn Red",
        "price": 22500
      },
      {
        "id": 195,
        "name": "Four Cousins Dry",
        "price": 9375
      },
      {
        "id": 196,
        "name": "Four Cousins Red",
        "price": 9375
      },
      {
        "id": 198,
        "name": "Four Cousins Sparkling",
        "price": 9000
      },
      {
        "id": 199,
        "name": "Four Cousins White",
        "price": 9375
      },
      {
        "id": 202,
        "name": "Friends and Family White",
        "price": 10125
      },
      {
        "id": 203,
        "name": "Fries",
        "price": 3000
      },
      {
        "id": 204,
        "name": "Frontera Cab Blush",
        "price": 10625
      },
      {
        "id": 206,
        "name": "Frontera Late Harvest",
        "price": 10625
      },
      {
        "id": 208,
        "name": "Frontera Sweet Red",
        "price": 10625
      },
      {
        "id": 209,
        "name": "Full English Breakfast",
        "price": 7500
      },
      {
        "id": 210,
        "name": "G H. Munn Gold",
        "price": 111750
      },
      {
        "id": 211,
        "name": "G H. Munn Grand",
        "price": 94500
      },
      {
        "id": 213,
        "name": "GORDON'S SMALL",
        "price": 2500
      },
      {
        "id": 214,
        "name": "GRENADINE SYRUP",
        "price": 15000
      },
      {
        "id": 216,
        "name": "Gentleman Jack",
        "price": 47500
      },
      {
        "id": 237,
        "name": "God Father",
        "price": 10000
      },
      {
        "id": 238,
        "name": "Gold Label",
        "price": 82500
      },
      {
        "id": 243,
        "name": "Grace O Malley",
        "price": 50000
      },
      {
        "id": 245,
        "name": "Grant",
        "price": 15375
      },
      {
        "id": 246,
        "name": "Grant Triple Wood 12 yrs",
        "price": 31875
      },
      {
        "id": 247,
        "name": "Green Label",
        "price": 130000
      },
      {
        "id": 248,
        "name": "Grey Grouse",
        "price": 55875
      },
      {
        "id": 249,
        "name": "HALF  JUG NORMAL",
        "price": 4125
      },
      {
        "id": 250,
        "name": "HALF JUG DOUBLE",
        "price": 4625
      },
      {
        "id": 255,
        "name": "HUNTER'S DRY",
        "price": 2000
      },
      {
        "id": 256,
        "name": "HUNTER'S GOLD",
        "price": 2000
      },
      {
        "id": 260,
        "name": "Hibiscus Tea",
        "price": 2500
      },
      {
        "id": 261,
        "name": "Hot Pot English Breakfast Tea",
        "price": 3000
      },
      {
        "id": 262,
        "name": "Hot Pot English Tea",
        "price": 3125
      },
      {
        "id": 263,
        "name": "IMPERIAL CROWN",
        "price": 1500
      },
      {
        "id": 268,
        "name": "Imperial Blue",
        "price": 5625
      },
      {
        "id": 270,
        "name": "JACK DANIEL APPLE",
        "price": 33000
      },
      {
        "id": 271,
        "name": "JACK DANIEL'S",
        "price": 33000
      },
      {
        "id": 272,
        "name": "JAMESON SHOT",
        "price": 6250
      },
      {
        "id": 273,
        "name": "JOHN BANNERMANS",
        "price": 17500
      },
      {
        "id": 275,
        "name": "JOSE CUERVO SILVER",
        "price": 26762
      },
      {
        "id": 276,
        "name": "Jack Daniel single barrel",
        "price": 65550
      },
      {
        "id": 277,
        "name": "Jack Daniel's Fire",
        "price": 33000
      },
      {
        "id": 278,
        "name": "Jack's Daniel Honey",
        "price": 33000
      },
      {
        "id": 279,
        "name": "Jagermeister",
        "price": 20125
      },
      {
        "id": 280,
        "name": "Jam Shed White",
        "price": 10625
      },
      {
        "id": 281,
        "name": "Jam Sherd Red",
        "price": 10512
      },
      {
        "id": 283,
        "name": "Jameson 4.5 Ltr",
        "price": 193750
      },
      {
        "id": 284,
        "name": "Jameson Black",
        "price": 47625
      },
      {
        "id": 285,
        "name": "Jameson Green",
        "price": 30000
      },
      {
        "id": 287,
        "name": "Jean Loron",
        "price": 13500
      },
      {
        "id": 288,
        "name": "Joe GOT A GUN",
        "price": 40750
      },
      {
        "id": 289,
        "name": "Joe Got A Gun",
        "price": 40750
      },
      {
        "id": 291,
        "name": "Jura 12 yrs",
        "price": 39000
      },
      {
        "id": 292,
        "name": "Jura 18 yrs",
        "price": 91000
      },
      {
        "id": 293,
        "name": "Kings Kestrel",
        "price": 10000
      },
      {
        "id": 294,
        "name": "Korean Raspberry",
        "price": 9375
      },
      {
        "id": 295,
        "name": "LEGEND (can)",
        "price": 2500
      },
      {
        "id": 296,
        "name": "LIFE",
        "price": 2000
      },
      {
        "id": 297,
        "name": "La fiole Dupape",
        "price": 68750
      },
      {
        "id": 298,
        "name": "La- Fielo",
        "price": 12500
      },
      {
        "id": 299,
        "name": "Lamoth Parrot",
        "price": 10625
      },
      {
        "id": 304,
        "name": "Leon Del Sol Red",
        "price": 6250
      },
      {
        "id": 306,
        "name": "Leon Del Sol White",
        "price": 8937
      },
      {
        "id": 307,
        "name": "Liquid Cocaine",
        "price": 10000
      },
      {
        "id": 308,
        "name": "Long Island",
        "price": 8000
      },
      {
        "id": 309,
        "name": "M and G",
        "price": 10625
      },
      {
        "id": 310,
        "name": "MACALLAN RARE CASK",
        "price": 437500
      },
      {
        "id": 311,
        "name": "MAISON DE VIN",
        "price": 11250
      },
      {
        "id": 312,
        "name": "MALTINA CAN BOTLE",
        "price": 1000
      },
      {
        "id": 313,
        "name": "MANIFEST",
        "price": 62500
      },
      {
        "id": 316,
        "name": "MOET NECTAR",
        "price": 131250
      },
      {
        "id": 319,
        "name": "MONSTER ENERGY DRINK",
        "price": 2500
      },
      {
        "id": 320,
        "name": "Macallan 12yrs",
        "price": 118750
      },
      {
        "id": 321,
        "name": "Macallan 15yrs",
        "price": 225000
      },
      {
        "id": 322,
        "name": "Macallan 18yrs",
        "price": 462500
      },
      {
        "id": 323,
        "name": "Macallan 25 yrs",
        "price": 4050000
      },
      {
        "id": 324,
        "name": "Magarita",
        "price": 8000
      },
      {
        "id": 325,
        "name": "Maimi Beach",
        "price": 8000
      },
      {
        "id": 326,
        "name": "Maison J Grandet",
        "price": 9375
      },
      {
        "id": 327,
        "name": "Malibu",
        "price": 17250
      },
      {
        "id": 328,
        "name": "Martell Blue Swift",
        "price": 106250
      },
      {
        "id": 329,
        "name": "Martell XO",
        "price": 400000
      },
      {
        "id": 330,
        "name": "Martell vs",
        "price": 60625
      },
      {
        "id": 331,
        "name": "Martinelis",
        "price": 11887
      },
      {
        "id": 332,
        "name": "Martini DRY",
        "price": 20340
      },
      {
        "id": 333,
        "name": "Martini Fiero",
        "price": 18750
      },
      {
        "id": 335,
        "name": "Martini Rosso",
        "price": 17500
      },
      {
        "id": 336,
        "name": "Masia Dutti",
        "price": 50125
      },
      {
        "id": 337,
        "name": "Medium  Catfish",
        "price": 11000
      },
      {
        "id": 338,
        "name": "Medium Campari",
        "price": 23125
      },
      {
        "id": 339,
        "name": "Medium Tilapia",
        "price": 14000
      },
      {
        "id": 345,
        "name": "Mijenta Gold",
        "price": 169650
      },
      {
        "id": 346,
        "name": "Mijenta Silver",
        "price": 61125
      },
      {
        "id": 347,
        "name": "Mint Lemonade",
        "price": 3750
      },
      {
        "id": 348,
        "name": "Mirador Black",
        "price": 23750
      },
      {
        "id": 349,
        "name": "Mirador Blue",
        "price": 23750
      },
      {
        "id": 350,
        "name": "Mirador Red",
        "price": 23750
      },
      {
        "id": 351,
        "name": "Mocha Frappucino",
        "price": 6875
      },
      {
        "id": 352,
        "name": "Mocha Latte",
        "price": 5625
      },
      {
        "id": 353,
        "name": "Mojito",
        "price": 4375
      },
      {
        "id": 354,
        "name": "Mojito",
        "price": 10000
      },
      {
        "id": 355,
        "name": "Monkey Shoulder",
        "price": 51750
      },
      {
        "id": 356,
        "name": "Monster",
        "price": 2000
      },
      {
        "id": 357,
        "name": "Mouton Cadet White",
        "price": 11500
      },
      {
        "id": 358,
        "name": "Mouton Cardet Red",
        "price": 24000
      },
      {
        "id": 359,
        "name": "Mr Bosten",
        "price": 16400
      },
      {
        "id": 366,
        "name": "Nederburg Chardonnay",
        "price": 24625
      },
      {
        "id": 367,
        "name": "Nederburg Duet",
        "price": 24662
      },
      {
        "id": 370,
        "name": "Nederburg Pinotage",
        "price": 24662
      },
      {
        "id": 371,
        "name": "Nederburg Sauvignon Blanc",
        "price": 24625
      },
      {
        "id": 372,
        "name": "Nederburg Shiraz",
        "price": 24662
      },
      {
        "id": 373,
        "name": "Nederburg White",
        "price": 25000
      },
      {
        "id": 374,
        "name": "Neft",
        "price": 18750
      },
      {
        "id": 375,
        "name": "Night Train",
        "price": 9375
      },
      {
        "id": 376,
        "name": "Normal Arabian Tea 1 Lit",
        "price": 7146
      },
      {
        "id": 378,
        "name": "Oats Cookies",
        "price": 3125
      },
      {
        "id": 379,
        "name": "Observatory",
        "price": 54000
      },
      {
        "id": 380,
        "name": "Ocean Beach Red",
        "price": 8750
      },
      {
        "id": 381,
        "name": "Ocean Beach White",
        "price": 8750
      },
      {
        "id": 382,
        "name": "Old Smuggler",
        "price": 16000
      },
      {
        "id": 384,
        "name": "Oreo Milkshake",
        "price": 7500
      },
      {
        "id": 385,
        "name": "Oreos Milkshake",
        "price": 6875
      },
      {
        "id": 386,
        "name": "Orijin Bitters BIG",
        "price": 8750
      },
      {
        "id": 387,
        "name": "PECADO",
        "price": 23750
      },
      {
        "id": 388,
        "name": "POWER HORSE (BIG)",
        "price": 2500
      },
      {
        "id": 389,
        "name": "POWER HORSE (SMALL)",
        "price": 2000
      },
      {
        "id": 390,
        "name": "Pastoral cricova",
        "price": 26250
      },
      {
        "id": 391,
        "name": "Pastoral vertally",
        "price": 13750
      },
      {
        "id": 393,
        "name": "Pinaculada",
        "price": 10000
      },
      {
        "id": 394,
        "name": "Pink Lemonade",
        "price": 4375
      },
      {
        "id": 395,
        "name": "Pinot Grigio",
        "price": 44500
      },
      {
        "id": 396,
        "name": "Plain Latte",
        "price": 4375
      },
      {
        "id": 397,
        "name": "Plain Toast",
        "price": 625
      },
      {
        "id": 399,
        "name": "Poliakov",
        "price": 9750
      },
      {
        "id": 400,
        "name": "Proclamation",
        "price": 38062
      },
      {
        "id": 401,
        "name": "RED BULL (CAN)",
        "price": 2500
      },
      {
        "id": 402,
        "name": "RICH LADY SPARKLING",
        "price": 8750
      },
      {
        "id": 403,
        "name": "Rajshtra Apple",
        "price": 18750
      },
      {
        "id": 404,
        "name": "Rajshtra Pineapple",
        "price": 18750
      },
      {
        "id": 405,
        "name": "Red Label",
        "price": 25125
      },
      {
        "id": 406,
        "name": "Red Mug branded",
        "price": 500
      },
      {
        "id": 407,
        "name": "Red bull Tropical Mocktail",
        "price": 5000
      },
      {
        "id": 408,
        "name": "Red mug Branded (Paper Bag (Brown))",
        "price": 500
      },
      {
        "id": 409,
        "name": "Remy Martins 1738",
        "price": 127500
      },
      {
        "id": 410,
        "name": "Remy Martins XO",
        "price": 421625
      },
      {
        "id": 411,
        "name": "Remy vsop 70cl",
        "price": 105625
      },
      {
        "id": 412,
        "name": "Rich Lady Red",
        "price": 6875
      },
      {
        "id": 413,
        "name": "Robertson Red",
        "price": 11250
      },
      {
        "id": 414,
        "name": "Rubis",
        "price": 25000
      },
      {
        "id": 415,
        "name": "Ruby Port",
        "price": 20625
      },
      {
        "id": 416,
        "name": "R\u00e9my Martin VS",
        "price": 62625
      },
      {
        "id": 417,
        "name": "SALAMANCA blanco",
        "price": 73125
      },
      {
        "id": 418,
        "name": "SCHWEPPES BITTER LEMON",
        "price": 1000
      },
      {
        "id": 419,
        "name": "SCHWEPPES BITTER LEMON CAN",
        "price": 1500
      },
      {
        "id": 420,
        "name": "SCHWEPPES CHAPMAN (PLASTIC)",
        "price": 1000
      },
      {
        "id": 421,
        "name": "SCHWEPPES MOJITO",
        "price": 1000
      },
      {
        "id": 422,
        "name": "SCHWEPPES MOJITO (copy)",
        "price": 1000
      },
      {
        "id": 423,
        "name": "SCHWEPPES TONIC WATER",
        "price": 1000
      },
      {
        "id": 427,
        "name": "SMIRNOFF X1 BIG",
        "price": 2500
      },
      {
        "id": 430,
        "name": "STARKA",
        "price": 11250
      },
      {
        "id": 433,
        "name": "SandeMan Fine Ruby porto",
        "price": 24125
      },
      {
        "id": 434,
        "name": "SandeMan Fine Tawny Porto",
        "price": 24125
      },
      {
        "id": 435,
        "name": "SandeMan [Founder's Reserve] Ruby porto",
        "price": 31550
      },
      {
        "id": 436,
        "name": "Sedro",
        "price": 48750
      },
      {
        "id": 437,
        "name": "Sex on the beach",
        "price": 10000
      },
      {
        "id": 438,
        "name": "Shirley Temple",
        "price": 6250
      },
      {
        "id": 442,
        "name": "Sin City Sober",
        "price": 6250
      },
      {
        "id": 443,
        "name": "Singleton 12 yrs",
        "price": 81250
      },
      {
        "id": 444,
        "name": "Singleton 15 yrs",
        "price": 112500
      },
      {
        "id": 447,
        "name": "Small Bottega Gold 200ml",
        "price": 11250
      },
      {
        "id": 450,
        "name": "Smoothie",
        "price": 4000
      },
      {
        "id": 451,
        "name": "Smoothie Take-out cup",
        "price": 500
      },
      {
        "id": 452,
        "name": "Sparkling Tropical",
        "price": 6250
      },
      {
        "id": 453,
        "name": "St Remy Signature",
        "price": 43750
      },
      {
        "id": 454,
        "name": "St Remy VSOP",
        "price": 28750
      },
      {
        "id": 455,
        "name": "St Remy XO",
        "price": 37500
      },
      {
        "id": 456,
        "name": "Star Chaser",
        "price": 6250
      },
      
      {
        "id": 458,
        "name": "Strawberry Daiquiri",
        "price": 5000
      },
      {
        "id": 460,
        "name": "Sweet Kiss Red",
        "price": 8750
      },
      {
        "id": 462,
        "name": "Sweet Kiss White",
        "price": 8750
      },
      {
        "id": 463,
        "name": "TEELING SINGLE GRAIN",
        "price": 62500
      },
      {
        "id": 464,
        "name": "TEELING SMALL BATCH",
        "price": 50000
      },
      {
        "id": 466,
        "name": "TIGER CRAN BERRY (CAN)",
        "price": 1500
      },
      
      {
        "id": 470,
        "name": "Tanqueray",
        "price": 66750
      },
      {
        "id": 472,
        "name": "Teem Soda",
        "price": 1000
      },
      {
        "id": 473,
        "name": "Tenjaku",
        "price": 27500
      },
      {
        "id": 475,
        "name": "The Botanist",
        "price": 32750
      },
      {
        "id": 476,
        "name": "The Chocolate Block",
        "price": 58500
      },
      {
        "id": 477,
        "name": "The Dictator (game changer)",
        "price": 262500
      },
      {
        "id": 478,
        "name": "The Famous Grouse",
        "price": 18150
      },
      {
        "id": 479,
        "name": "The Nines",
        "price": 8875
      },
      {
        "id": 480,
        "name": "The One",
        "price": 82500
      },
      {
        "id": 481,
        "name": "The One (Fine blended)",
        "price": 82500
      },
      {
        "id": 482,
        "name": "The irishman",
        "price": 65000
      },
      {
        "id": 483,
        "name": "Thomas Barton Saint Emilion",
        "price": 44750
      },
      {
        "id": 484,
        "name": "Thomas Barton bordeaux",
        "price": 27000
      },
      {
        "id": 485,
        "name": "Toro Gold",
        "price": 18500
      },
      {
        "id": 486,
        "name": "Toro Silver",
        "price": 18500
      },
      {
        "id": 487,
        "name": "Triple Sec",
        "price": 22500
      },
      {
        "id": 488,
        "name": "Tullamore dew",
        "price": 24750
      },
      {
        "id": 489,
        "name": "UNSWEETENED",
        "price": 8188
      },
      {
        "id": 491,
        "name": "VEUVE RICH",
        "price": 168750
      },
      {
        "id": 492,
        "name": "Vanilla Milkshake",
        "price": 10000
      },
      {
        "id": 493,
        "name": "Veggie Delight",
        "price": 5625
      },
      {
        "id": 494,
        "name": "Veleta",
        "price": 4500
      },
      {
        "id": 497,
        "name": "Vina Jesusa",
        "price": 15000
      },
      {
        "id": 500,
        "name": "Voitis",
        "price": 50000
      },
      {
        "id": 502,
        "name": "Volcan cristalino",
        "price": 143750
      },
      {
        "id": 503,
        "name": "Wave Dancer",
        "price": 6250
      },
      {
        "id": 504,
        "name": "West Cork Triple Distilled",
        "price": 21250
      },
      {
        "id": 505,
        "name": "West cork single malt",
        "price": 35000
      },
      {
        "id": 507,
        "name": "White Mug branded",
        "price": 625
      },
      {
        "id": 509,
        "name": "Whitley Neill(blood orange)",
        "price": 26250
      },
      {
        "id": 510,
        "name": "Wild Turkey 101",
        "price": 30750
      },
      {
        "id": 511,
        "name": "Wild Turkey 81",
        "price": 26875
      },
      {
        "id": 512,
        "name": "William Lawson",
        "price": 26000
      },
      {
        "id": 516,
        "name": "jack Daniel apple",
        "price": 33000
      }
    ]
  },
  {
    "category": "Wine & Champagne",
    "items": [
      {
        "id": 109,
        "name": "Carlo Rossi Carlifornia Red",
        "price": 10625
      },
      {
        "id": 110,
        "name": "Carlo Rossi Peach",
        "price": 10625
      },
      {
        "id": 112,
        "name": "Carlo Rossi Strawberry",
        "price": 10625
      },
      {
        "id": 113,
        "name": "Carlo Rossi Sweet Red",
        "price": 10625
      },
      {
        "id": 114,
        "name": "Carlo Rossi White",
        "price": 10625
      },
      {
        "id": 2,
        "name": "19 Crimes Rose",
        "price": 11250
      },
      {
        "id": 3,
        "name": "4TH STREET ROSE",
        "price": 6250
      },
      {
        "id": 19,
        "name": "Amabile Rose",
        "price": 9750
      },
      {
        "id": 25,
        "name": "Andre Brut",
        "price": 11625
      },
      {
        "id": 26,
        "name": "Andre Rose",
        "price": 14250
      },
      {
        "id": 60,
        "name": "Belaire Rose with Light",
        "price": 70875
      },
      {
        "id": 61,
        "name": "Belaire Rose without Light",
        "price": 55000
      },
      {
        "id": 75,
        "name": "Blue Nun Merlot",
        "price": 13250
      },
      {
        "id": 83,
        "name": "Bree Rose",
        "price": 10000
      },
      {
        "id": 101,
        "name": "CRICOVA muscat white",
        "price": 17500
      },
      {
        "id": 111,
        "name": "Carlo Rossi Rose",
        "price": 10625
      },
      {
        "id": 142,
        "name": "Cricova Premium Cuvee Brut",
        "price": 117500
      },
      {
        "id": 143,
        "name": "Cricova Rose",
        "price": 19000
      },
      {
        "id": 153,
        "name": "De Vin Merlot",
        "price": 11250
      },
      {
        "id": 167,
        "name": "Dom P. Rose",
        "price": 1112500
      },
      {
        "id": 168,
        "name": "Dom. P Brut",
        "price": 642000
      },
      {
        "id": 192,
        "name": "FischBorn Rose",
        "price": 22500
      },
      {
        "id": 197,
        "name": "Four Cousins Rose",
        "price": 9375
      },
      {
        "id": 200,
        "name": "Friends and Family Merlot",
        "price": 10125
      },
      {
        "id": 201,
        "name": "Friends and Family Rose",
        "price": 10125
      },
      {
        "id": 205,
        "name": "Frontera Cabernet Sauvignon",
        "price": 10625
      },
      {
        "id": 207,
        "name": "Frontera Merlot",
        "price": 10625
      },
      {
        "id": 244,
        "name": "Gran Castillo Merlot",
        "price": 22500
      },
      {
        "id": 282,
        "name": "Jam Sherd Rose",
        "price": 10512
      },
      {
        "id": 300,
        "name": "Laurent-Perrier brut",
        "price": 150000
      },
      {
        "id": 301,
        "name": "Le Filou Rose",
        "price": 10000
      },
      {
        "id": 305,
        "name": "Leon Del Sol Rose",
        "price": 6875
      },
      {
        "id": 314,
        "name": "MOET BRUT",
        "price": 111433
      },
      {
        "id": 317,
        "name": "MOET ROSE",
        "price": 150000
      },
      {
        "id": 318,
        "name": "MOET ROSE IMPERIAL",
        "price": 144500
      },
      {
        "id": 334,
        "name": "Martini Rose",
        "price": 18750
      },
      {
        "id": 362,
        "name": "Muscat White",
        "price": 11250
      },
      {
        "id": 363,
        "name": "Nederburg Brut",
        "price": 18750
      },
      {
        "id": 364,
        "name": "Nederburg Cabernet Sauvignon",
        "price": 24662
      },
      {
        "id": 365,
        "name": "Nederburg Cabernet Sauvignon 56",
        "price": 24662
      },
      {
        "id": 368,
        "name": "Nederburg Edelrood Cabernet",
        "price": 24662
      },
      {
        "id": 369,
        "name": "Nederburg Merlot",
        "price": 24662
      },
      {
        "id": 392,
        "name": "Penascal Rose",
        "price": 10625
      },
      {
        "id": 449,
        "name": "Small Nederburg Rose",
        "price": 12500
      },
      {
        "id": 459,
        "name": "Sun Dancer Rose",
        "price": 6250
      },
      {
        "id": 461,
        "name": "Sweet Kiss Rose",
        "price": 8750
      },
      {
        "id": 490,
        "name": "VEUVE DU VERNAY ICE ROSE",
        "price": 15000
      },
      {
        "id": 495,
        "name": "Verve Rose",
        "price": 159000
      },
      {
        "id": 496,
        "name": "Veuve Clecquot Brut",
        "price": 143750
      },
      {
        "id": 519,
        "name": "muscat Pink",
        "price": 11250
      }
    ]
  },
  {
    "category": "Vodka / Gin / Rum / Tequila",
    "items": [
      {
        "id": 15,
        "name": "Agavales tequila",
        "price": 16500
      },
      {
        "id": 57,
        "name": "Beefeater Gin",
        "price": 18625
      },
      {
        "id": 64,
        "name": "Belvedere",
        "price": 81250
      },
      {
        "id": 78,
        "name": "Botanist gin",
        "price": 32750
      },
      {
        "id": 121,
        "name": "Cazcabel tequila blanco",
        "price": 46000
      },
      {
        "id": 155,
        "name": "Dead Man's Finger tequila reposado",
        "price": 25000
      },
      {
        "id": 156,
        "name": "Dead man's Finger Coconut Rum",
        "price": 18750
      },
      {
        "id": 157,
        "name": "Dead man's Finger Coffee Rum",
        "price": 18750
      },
      {
        "id": 158,
        "name": "Dead man's Finger Hazelnut Rum",
        "price": 18750
      },
      {
        "id": 159,
        "name": "Dead man's Finger Hemp Rum",
        "price": 18750
      },
      {
        "id": 160,
        "name": "Dead man's Finger Pineapple Rum",
        "price": 18750
      },
      {
        "id": 170,
        "name": "Don Julio 1942",
        "price": 525000
      },
      {
        "id": 171,
        "name": "Don Julio blanco",
        "price": 161875
      },
      {
        "id": 172,
        "name": "Don Julio reposado",
        "price": 168750
      },
      {
        "id": 176,
        "name": "EXTRA GINGER",
        "price": 2140
      },
      {
        "id": 193,
        "name": "Flirt Vodka Chocolate",
        "price": 10000
      },
      {
        "id": 194,
        "name": "Flirt Vodka Plain",
        "price": 10000
      },
      {
        "id": 217,
        "name": "Gibson Gin",
        "price": 7500
      },
      {
        "id": 239,
        "name": "Gordon Gin Foreign",
        "price": 15625
      },
      {
        "id": 240,
        "name": "Gordon Gin Moringa",
        "price": 7500
      },
      {
        "id": 241,
        "name": "Gordon Gin Orange",
        "price": 10000
      },
      {
        "id": 242,
        "name": "Gordon Gin Pink",
        "price": 10000
      },
      {
        "id": 257,
        "name": "Hendricks Gin",
        "price": 52875
      },
      {
        "id": 269,
        "name": "Inverroche Gin",
        "price": 58000
      },
      {
        "id": 303,
        "name": "Lemon and Ginger Tea",
        "price": 5000
      },
      {
        "id": 360,
        "name": "Mr Bosten Vodka",
        "price": 12500
      },
      {
        "id": 361,
        "name": "Mr Boston Gin",
        "price": 8700
      },
      {
        "id": 377,
        "name": "ORIGIN BITTERS (SMALL)",
        "price": 2500
      },
      {
        "id": 383,
        "name": "Olmeca Tequila Silver",
        "price": 32500
      },
      {
        "id": 432,
        "name": "STUMBRAS VODKA",
        "price": 18750
      },
      {
        "id": 439,
        "name": "Sierra Tequila Gold",
        "price": 18750
      },
      {
        "id": 440,
        "name": "Sierra Tequila Silver",
        "price": 18750
      },
      {
        "id": 446,
        "name": "Skyy Vodka",
        "price": 22500
      },
      {
        "id": 465,
        "name": "TEQUILA SHOT",
        "price": 3000
      },
      {
        "id": 467,
        "name": "TIGER GINGER (CAN)",
        "price": 1500
      },
      {
        "id": 468,
        "name": "TIGER VODKA (CAN)",
        "price": 1500
      },
      {
        "id": 474,
        "name": "Tequila Sunrise",
        "price": 10000
      },
      {
        "id": 498,
        "name": "Virgin Mojito",
        "price": 6250
      },
      {
        "id": 499,
        "name": "Virgin Pina Culada",
        "price": 6250
      },
      {
        "id": 501,
        "name": "Volcan Tequila Blanco",
        "price": 78645
      },
      {
        "id": 514,
        "name": "belvedere vodka",
        "price": 56250
      },
      {
        "id": 520,
        "name": "virgin Sunrise",
        "price": 5000
      }
    ]
  },
  {
    "category": "Extras / Add-ons",
    "items": [
      {
        "id": 45,
        "name": "Bacardi Spice",
        "price": 20000
      },
      {
        "id": 95,
        "name": "CHIVITA juice",
        "price": 5000
      },
      {
        "id": 161,
        "name": "Dead man's Finger Spiced",
        "price": 18750
      },
      {
        "id": 177,
        "name": "EXTRA GROUNDNUT",
        "price": 2140
      },
      {
        "id": 178,
        "name": "EXTRA HONEY",
        "price": 1063
      },
      {
        "id": 179,
        "name": "EXTRA LEMON",
        "price": 576
      },
      {
        "id": 187,
        "name": "Extra plantain",
        "price": 1000
      },
      {
        "id": 264,
        "name": "Ice cube pack",
        "price": 3500
      },
      {
        "id": 265,
        "name": "Iced Caramel Latte",
        "price": 5625
      },
      {
        "id": 266,
        "name": "Iced Coffee",
        "price": 3125
      },
      {
        "id": 267,
        "name": "Iced Mocha Latte",
        "price": 5625
      },
      {
        "id": 315,
        "name": "MOET ICE",
        "price": 144500
      },
      {
        "id": 398,
        "name": "Plained Iced Latte",
        "price": 3750
      },
      
      {
        "id": 441,
        "name": "Silk and Spiced",
        "price": 20000
      }
    ]
  },
  {
    "category": "Beer & Soft Drinks",
    "items": [
      {
        "id": 457,
        "name": "Star radler",
        "price": 2000
      },
      {
        "id": 469,
        "name": "TROPHY",
        "price": 2000
      },
      {
        "id": 425,
        "name": "SMIRNOFF ICE",
        "price": 2000
      },
      {
        "id": 426,
        "name": "SMIRNOFF ICE DOUBLE BLACK",
        "price": 2000
      },
      {
        "id": 97,
        "name": "COKE CAN BOTTLE",
        "price": 1000
      },
      {
        "id": 98,
        "name": "COKE PLASTIC BOTLE 35 CL",
        "price": 1000
      },
      {
        "id": 99,
        "name": "COKE PLASTIC BOTLE 50 CL",
        "price": 1000
      },
      {
        "id": 188,
        "name": "FANTA PLASTIC BOTTLE",
        "price": 1000
      },
      {
        "id": 215,
        "name": "GUINESS STOUT",
        "price": 2000
      },
      {
        "id": 251,
        "name": "HEINEKEN",
        "price": 2000
      },
      {
        "id": 286,
        "name": "Jameson Stout Edition",
        "price": 35625
      },
      {
        "id": 428,
        "name": "SPRITE CAN",
        "price": 1000
      },
      {
        "id": 429,
        "name": "SPRITE PLASTIC 50CL",
        "price": 1000
      }
    ]
  },
  {
    "category": "Whisky / Cognac / Brandy",
    "items": [
      {
        "id": 166,
        "name": "Dewars",
        "price": 33250
      },
      {
        "id": 190,
        "name": "First Watch Whisky",
        "price": 11250
      },
      {
        "id": 212,
        "name": "GLENMORANGIE SIGNET",
        "price": 375000
      },
      {
        "id": 218,
        "name": "Glenfiddich 12yrs",
        "price": 73250
      },
      {
        "id": 219,
        "name": "Glenfiddich 15yrs",
        "price": 104875
      },
      {
        "id": 220,
        "name": "Glenfiddich 16yrs formula one",
        "price": 143750
      },
      {
        "id": 221,
        "name": "Glenfiddich 18yrs",
        "price": 165375
      },
      {
        "id": 222,
        "name": "Glenfiddich 22yrs",
        "price": 516250
      },
      {
        "id": 223,
        "name": "Glenfiddish 21 yrs",
        "price": 423750
      },
      {
        "id": 224,
        "name": "Glenfiddish 23 yrs",
        "price": 640000
      },
      {
        "id": 225,
        "name": "Glenfiddish 26 yrs",
        "price": 1345500
      },
      {
        "id": 226,
        "name": "Glenfiddish 30 yrs",
        "price": 2548750
      },
      {
        "id": 227,
        "name": "Glenlivet 15 Yrs",
        "price": 123625
      },
      {
        "id": 228,
        "name": "Glenlivet 18yrs",
        "price": 215000
      },
      {
        "id": 229,
        "name": "Glenlivet Founder's Reserve",
        "price": 64500
      },
      {
        "id": 230,
        "name": "Glenliveth 12yrs",
        "price": 85875
      },
      {
        "id": 231,
        "name": "Glenliveth 21yrs",
        "price": 472500
      },
      {
        "id": 232,
        "name": "Glenmorangie 10 yrs",
        "price": 56175
      },
      {
        "id": 233,
        "name": "Glenmorangie 18 yrs",
        "price": 183000
      },
      {
        "id": 234,
        "name": "Glenmorangie Lasanta 12yrs",
        "price": 64375
      },
      {
        "id": 235,
        "name": "Glenmorangie Quinta 14yrs",
        "price": 82500
      },
      {
        "id": 236,
        "name": "Glenmorangie nectar dor",
        "price": 97350
      },
      {
        "id": 252,
        "name": "HENNESSY SHOT",
        "price": 6000
      },
      {
        "id": 253,
        "name": "HENNESSY VSOP",
        "price": 120500
      },
      {
        "id": 254,
        "name": "HENNESSY VSOP 1L",
        "price": 150000
      },
      {
        "id": 258,
        "name": "Hennessy VS 70CL",
        "price": 64250
      },
      {
        "id": 259,
        "name": "Hennessy XO",
        "price": 444500
      },
      {
        "id": 274,
        "name": "JOHNNIE WALKER 18 yrs",
        "price": 165000
      },
      {
        "id": 290,
        "name": "Johnnie walker Blonde",
        "price": 28000
      },
      {
        "id": 302,
        "name": "Legend Whiskey",
        "price": 18750
      },
      {
        "id": 340,
        "name": "Meukow Expresso",
        "price": 39000
      },
      {
        "id": 341,
        "name": "Meukow VS",
        "price": 50750
      },
      {
        "id": 342,
        "name": "Meukow VSOP",
        "price": 87000
      },
      {
        "id": 343,
        "name": "Meukow Vanilla",
        "price": 53250
      },
      {
        "id": 344,
        "name": "Meukow Wild Berry",
        "price": 45750
      },
      {
        "id": 431,
        "name": "STEROC BRANDY",
        "price": 17500
      },
      {
        "id": 448,
        "name": "Small Hennessy VS",
        "price": 32125
      },
      {
        "id": 471,
        "name": "Teeling whiskey single malt",
        "price": 87500
      },
      {
        "id": 506,
        "name": "Whisky sour",
        "price": 10000
      },
      {
        "id": 508,
        "name": "White Walker",
        "price": 30000
      },
      {
        "id": 513,
        "name": "Woodford Reserve",
        "price": 51250
      },
      {
        "id": 518,
        "name": "meukow XO",
        "price": 249000
      }
    ]
  },
  {
    "category": "Cocktails & Mocktails",
    "items": [
      {
        "id": 174,
        "name": "Double Espresso",
        "price": 3125
      },
      {
        "id": 445,
        "name": "Singleton signature cocktail",
        "price": 13750
      },
      {
        "id": 517,
        "name": "kamankazy",
        "price": 10000
      }
    ]
  },
  // {
  //   "category": "Shisha & Lounge",
  //   "items": [
  //     {
  //       "id": 175,
  //       "name": "EXTRA COAL",
  //       "price": 1000
  //     },
  //     {
  //       "id": 424,
  //       "name": "SHISHA",
  //       "price": 10000
  //     },
  //     {
  //       "id": 515,
  //       "name": "broken shisha pot",
  //       "price": 38750
  //     }
  //   ]
  // }
]

// const drinksSubMenus: Record<string, MenuItem[]> = {
//   Vodka: [{ id: 13, name: "Premium Vodka", price: 8000 }],
//   Cocktails: [{ id: 14, name: "Mojito", price: 3500 }],
//   Beer: [{ id: 15, name: "Heineken", price: 1500 }],
//   Wines: [{ id: 16, name: "Red Wine", price: 9000 }],
//   Spirits: [{ id: 17, name: "Whiskey", price: 7000 }],
//   Cider: [{ id: 18, name: "Apple Cider", price: 2500 }],
//   Mocktails: [{ id: 19, name: "Virgin Mojito", price: 3000 }],
//   Water: [{ id: 20, name: "Bottled Water", price: 500 }],
//   Milks: [{ id: 21, name: "Chocolate Milk", price: 1200 }],
//   Juices: [
//     { id: 22, name: "Fresh Orange Juice", price: 2000 },
//     { id: 23, name: "Pineapple Juice", price: 2000 },
//   ],
//   "Coffee & Tea": [{ id: 24, name: "Cappuccino", price: 2200 }],
//   "Sodas & Soft Drinks": [
//     { id: 25, name: "Pepsi", price: 1000 },
//     { id: 26, name: "Fanta", price: 1000 },
//     { id: 27, name: "Sprite", price: 1000 },
//   ],
// };

const extrasMenu: MenuItem[] = [
  { id: 91, name: "Shisha (Single Flavor)", price: 8000 },
  { id: 92, name: "Shisha (Double Flavor)", price: 10000 },
  { id: 93, name: "Shisha Refill", price: 5000 },
  { id: 94, name: "Extra Coal", price: 1500 },
  { id: 95, name: "broken shisha pot", price: 38750 },
];

export default function Home() {
  const [openMenu, setOpenMenu] =
    useState<"food" | "drinks" | "extras" | null>(null);
  const [openDrinkSub, setOpenDrinkSub] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [openCart, setOpenCart] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const [showOrderForm, setShowOrderForm] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [seatNumber, setSeatNumber] = useState("");
  const [toastOpen, setToastOpen] = useState(false);

  /* ===== NEW STATES ===== */
  const [openAttendantModal, setOpenAttendantModal] = useState(false);
  const [attendantTable, setAttendantTable] = useState("");
  const [attendantRequest, setAttendantRequest] = useState("");
  const [showAttendants, setShowAttendantsSoon] = useState(false);
  const [showSongsSoon, setShowSongsSoon] = useState(false);
const [showKaraokeSoon, setShowKaraokeSoon] = useState(false);
const [showShoutoutSoon, setShowShoutoutSoon] = useState(false);

const [openCategory, setOpenCategory] = useState<string | null>(null);

const toggleCategory = (category: string) => {
  setOpenCategory((prev) => (prev === category ? null : category));
};


const showTemporarily = (setState: React.Dispatch<React.SetStateAction<boolean>>) => {
  setState(true);
  setTimeout(() => {
    setState(false);
  }, 1000); // 1 second
};



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

  const vatRate = 0.075;
  const vatAmount = Math.round(totalAmount * vatRate);
  const grandTotal = totalAmount + vatAmount;

  /* ================= MENU RENDER ================= */
  


  const renderMenu = (data: MenuItem[] | DrinksCategory[]) => (
  <div className="space-y-1">
    {data.map((entry) => {
      // ✅ DRINKS CATEGORY (SUB-MENU)
      if ("category" in entry) {
        const isOpen = openCategory === entry.category;

        return (
          <div key={entry.category}>
            {/* CATEGORY HEADER */}
            <button
              onClick={() => toggleCategory(entry.category)}
              className="w-full flex justify-between items-center bg-gray-700 text-white p-3 rounded-md"
            >
              <h3 className="text-lg font-bold">{entry.category}</h3>
              <span className="text-xl">{isOpen ? "−" : "+"}</span>
            </button>

            {/* CATEGORY ITEMS */}
            {isOpen && (
              <div className="bg-gray-300 rounded-lg p-4 space-y-3 ">
                {entry.items.map((item) => {
                  const qty =
                    cart.find((c) => c.id === item.id)?.quantity || 0;

                  return (
                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <div>
                        <p className="font-medium text-black">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-800">
                          ₦{item.price}
                        </p>
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
            )}
          </div>
        );
      }

      // ✅ FOOD / EXTRAS (FLAT ITEMS)
      const item = entry as MenuItem;
      const qty = cart.find((c) => c.id === item.id)?.quantity || 0;

      return (
        <div
          key={item.id}
          className="bg-gray-300 rounded-lg p-4 space-y-3"
        >
          <div className="flex justify-between items-center">
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
        </div>
      );
    })}
  </div>
);


  /* ================= WHATSAPP ORDER ================= */
  const handleWhatsAppOrder = () => {
    const itemsText = cart
      .map(
        (item) =>
          `${item.name} x${item.quantity} - ₦${
            item.price * item.quantity
          }`
      )
      .join("\n");

    const message = `New Order 🍽️
Name: ${customerName}
Seat Number: ${seatNumber}

Order Items:
${itemsText}

VAT (7.5%): ₦${vatAmount}
Total: ₦${grandTotal}`;

    const phone = "2348021999995";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setToastOpen(true);
    setCart([]);
    setCustomerName("");
    setSeatNumber("");
    setShowOrderForm(false);
    setOpenCart(false);
  };

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
        className="relative  bg-contain  p-6  min-h-screen"
        style={{ backgroundImage: "url('/bgimg.jpeg')" }}

        
      >
        
        {/* PREVIEW + NEW ROW BUTTONS */}
        <div className="fixed bottom-28 right-16 z-50 space-y-2">
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

          {/* NEW ROW */}
          
        </div>

        {/* MENUS (UNCHANGED) */}
        <div className="max-w-md mx-auto mt-1 space-y-4">
          <button
            onClick={() =>
              setOpenMenu(openMenu === "food" ? null : "food")
            }
            className="w-full bg-black text-white py-6 rounded-lg"
          >
            Food Menu
          </button>
          {openMenu === "food" && renderMenu(foodMenu)}

          {/* <button
            onClick={() =>
              setOpenMenu(openMenu === "drinks" ? null : "drinks")
            }
            className="w-full bg-black text-white py-6 rounded-lg"
          >
            Drinks Menu
          </button>

          {openMenu === "drinks" && (
            <div className="space-y-3">
              {Object.entries(drinksSubMenus).map(([title, items]) => (
                <div key={title}>
                  <button
                    onClick={() =>
                      setOpenDrinkSub(
                        openDrinkSub === title ? null : title
                      )
                    }
                    className="w-full bg-gray-800 text-white py-2 rounded-lg"
                  >
                    {title}
                  </button>
                  {openDrinkSub === title && renderMenu(items)}
                </div>
              ))}
            </div>
          )} */}

            <button
  onClick={() =>
    setOpenMenu(openMenu === "drinks" ? null : "drinks")
  }
  className="w-full bg-black text-white py-6 rounded-lg"
>
  Drinks Menu
</button>

{openMenu === "drinks" && renderMenu(DrinksMenu)}

            



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



      

            

      {/* CALL ATTENDANT MODAL */}
      <Modal
        open={openAttendantModal}
        onClose={() => setOpenAttendantModal(false)}
      >
        <Box className="absolute bg-white rounded-lg p-4 top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 space-y-3">

        <button
      onClick={() => setOpenAttendantModal(false)}
      className="absolute top-2 right-2 text-black text-lg font-bold"
      aria-label="Close"
    >
      ×
    </button>

          <h2 className="font-semibold text-black">Call Attendant</h2>

          <select
  value={seatNumber}
  onChange={(e) => setSeatNumber(e.target.value)}
  className="w-full px-3 py-2 rounded border border-black bg-white text-black"
>
  <option value="" disabled>
    Select Table Number
  </option>
  {Array.from({ length: 10 }, (_, i) => (
    <option key={i + 1} value={i + 1}>
      Table {i + 1}
    </option>
  ))}
</select>

          <textarea
            value={attendantRequest}
            onChange={(e) => setAttendantRequest(e.target.value)}
            placeholder="Your request"
            className="w-full px-3 py-2 border rounded border-black text-black"
          />

          <button
            disabled={!attendantTable || !attendantRequest}
            onClick={() => {
              const message = `Call Attendant 🚨
Table: ${attendantTable}
Request: ${attendantRequest}`;

              window.open(
                `https://wa.me/2348021999995?text=${encodeURIComponent(
                  message
                )}`,
                "_blank"
              );

              setOpenAttendantModal(false);
              setAttendantTable("");
              setAttendantRequest("");
            }}
            className="w-full bg-green-600 text-white py-2 rounded disabled:opacity-50"
          >
            Send Request
          </button>
        </Box>
      </Modal>

      {/* CART MODAL (UNCHANGED) */}
      {/* CART MODAL */}
<Modal open={openCart} onClose={() => setOpenCart(false)}>
  <Box className="absolute bg-white rounded-lg p-4 top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2">
    <div className="flex justify-between items-center mb-3">
      <h2 className="font-semibold text-black">Your Cart</h2>
      <button
        onClick={() => {
          setIsMinimized(true);
          setOpenCart(false);
        }}
        className="border px-2 rounded"
      >
         ×
      </button>
    </div>

    {cart.length === 0 ? (
      <p className="text-gray-500">Cart is empty</p>
    ) : (
      <>
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-2"
          >
            <div>
              <p className="font-medium text-black ">{item.name}</p>
              <p className="text-sm text-black">
                ₦{item.price} × {item.quantity}
              </p>
            </div>
            {/* <div className="flex gap-2">
              <button
                onClick={() => removeFromCart(item.id)}
                className="border px-2 rounded border-black text-black"
              >
                −
              </button>
              <span className="text-black">{item.quantity}</span>
              <button
                onClick={() => addToCart(item)}
                className="border px-2 rounded border-black text-black"
              >
                +
              </button>
            </div> */}
          </div>
        ))}

        <div className="mt-3 space-y-1 text-right">
          <p className="text-sm text-black">
            VAT (7.5%): ₦{vatAmount}
          </p>
          <p className="font-semibold text-black">
            Total: ₦{grandTotal}
          </p>
        </div>

        {/* {!showOrderForm ? (
          <button
            onClick={() => setShowOrderForm(true)}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded"
          >
            Place Order
          </button>
        ) : (
          <div className="mt-4 space-y-3">
            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded border border-black"
            />
            
            <select
  value={seatNumber}
  onChange={(e) => setSeatNumber(e.target.value)}
  className="w-full px-3 py-2 rounded border border-black bg-white text-black"
>
  <option value="" disabled>
    Select Table Number
  </option>
  {Array.from({ length: 10 }, (_, i) => (
    <option key={i + 1} value={i + 1}>
      Table {i + 1}
    </option>
  ))}
</select>

            <button
              disabled={!customerName || !seatNumber}
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-700 text-white py-2 rounded disabled:opacity-50"
            >
              Confirm & Send to WhatsApp
            </button>
          </div>
        )} */}
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
