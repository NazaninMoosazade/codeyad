import { useMutation, useQueryClient } from "@tanstack/react-query";
import StatusMessage from "../Components/StatusMessage/StatusMessage";

export const useSubmitComment = (courseName) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newCommentBody) => {
      const localStorageData = JSON.parse(localStorage.getItem("user"));
      const res = await fetch(`http://localhost:5000/v1/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorageData.token}`,
        },
        body: JSON.stringify({
          body: newCommentBody,
          courseShortName: courseName,
          score: "5",
        }),
      });

      if (!res.ok) {
        throw new Error("ارسال کامنت با خطا مواجه شد");
      }

      return res.json();
    },
    onSuccess: () => {
        //  console.log("✅ Mutation موفق، invalidateQueries اجرا می‌شه");
      queryClient.invalidateQueries(["course", courseName]);
    },
  });
};

