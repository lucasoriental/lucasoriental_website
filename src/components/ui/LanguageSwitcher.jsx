"use client";

import { useLangStore } from "../../store/useLangStore";

const LanguageSwitcher = () => {
  const lang = useLangStore((state) => state.lang);
  const setLang = useLangStore((state) => state.setLang);

  return (
    <select value={lang} onChange={e => setLang(e.target.value)}>
      <option value="en">English</option>
      <option value="pt">Português</option>
    </select>
  );
}

export default LanguageSwitcher;