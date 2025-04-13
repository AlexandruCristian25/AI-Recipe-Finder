# AIRecipeFinder 🍳

O aplicație React care generează rețete culinare folosind OpenAI GPT și permite salvarea lor ca favorite. Este stilizată modern cu TailwindCSS și are funcționalități de filtrare, regenerare și gestionare a preferatelor.

## 🔧 Tehnologii folosite

- React + Vite
- TailwindCSS
- OpenAI API
- Local Storage

---

## ▶️ Pași pentru rulare

1. **Descarcă și dezarhivează arhiva**:
   ```bash
   unzip AIRecipeFinder_Final_Full_Updated.zip
   cd AIRecipeFinder_Final_Full
   ```

2. **Instalează dependențele**:
   ```bash
   npm install
   ```

3. **Creează fișierul `.env`** în rădăcina proiectului și adaugă:
   ```env
   VITE_OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

4. **Pornește aplicația**:
   ```bash
   npm run dev
   ```

5. Accesează în browser: [http://localhost:5173](http://localhost:5173)

---

## 💡 Funcționalități

- 🔍 Filtrare rețete după titlu
- 🧠 Generare rețetă folosind GPT
- ❤️ Adăugare/ștergere din favorite
- 🔁 Regenerare rețete
- 🌙 Interfață responsive & elegantă

---

## 📂 Structură foldere

- `src/components`: componente UI (RecipeCard, FilterBar etc.)
- `src/pages`: pagina principală `Home.jsx`
- `src/utils`: funcții ajutătoare
