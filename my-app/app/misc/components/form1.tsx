import { useActionState } from "react";

export const FormTest1 = () => {
  const [error, action, isPending] = useActionState<Error | null, FormData>(
    async (prevError: Error | null, formData: FormData) => {
      console.log(prevError);

      //   値の取得方法法
      const data = Object.fromEntries(formData.entries());
      console.log(data);

      //   returnを返せばエラー発生とする
      const error = new Error("Failed to submit data");
      if (error) {
        return error;
      }

      return null;
    },
    new Error("Initial Message")
  );

  return (
    <>
      <form action={action}>
        <input type="text" name="name" />
        <button type="submit" disabled={isPending}>
          送信
        </button>
        {error && <p>{error.message}</p>}
      </form>
    </>
  );
};
