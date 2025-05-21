import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebaseConfig";
import { useLangStore } from "@/store/useLangStore";

export function useProjects() {
  const lang = useLangStore((state) => state.lang);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const ref = doc(db, "projects", lang);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data();
          setProjects(data.list || []);
        } else {
          console.warn("Document not found");
          setProjects([]);
        }
      } catch (error) {
        console.error("Something went wrong, error: ", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [lang]);

  return { projects, loading };
}
