import { useState, useEffect } from "react";

export const useRecipe = (category = "") => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  console.log("API KEY:", apiKey);

  const fetchRecipe = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a helpful AI chef that generates creative, healthy and tasty recipes.",
            },
            {
              role: "user",
              content: `Generate a recipe${category ? ` for a ${category} dish` : ""} with ingredients, steps, and cooking time.`,
            },
          ],
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      console.log("API response:", data);

      if (data.choices && data.choices.length > 0) {
        setRecipe(data.choices[0].message.content.trim());
      } else {
        setError("No recipe generated.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Error generating recipe.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [category]);

  return { recipe, loading, error, regenerate: fetchRecipe };
};
