import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebaseConfig";

import { useLangStore } from "@/store/useLangStore";

export function useBlogPosts() {
  const lang = useLangStore((state) => state.lang);

  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        const docRef = doc(db, "blog", lang);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setContent(docSnap.data());
        } else {
          setError("No such document!");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogContent();
  }, [lang]);

  return { content, loading, error };
}
