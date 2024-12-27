import { useActionState } from "react";

export const FormTest2 = () => {
  const [count, countAction, isCountPending] = useActionState<number>(
    async (prevCount: number) => {
      await new Promise((res) => setTimeout(res, 1000));
      console.log(prevCount);
      return prevCount + 1;
    },
    0
  );

  return (
    <>
      <form action={countAction}>
        <button type="submit" disabled={isCountPending}>
          カウントアップ
        </button>
        <p>{count}</p>
      </form>
    </>
  );
};
