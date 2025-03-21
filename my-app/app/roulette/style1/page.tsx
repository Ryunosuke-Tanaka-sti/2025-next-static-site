"use client"

import { Loader2 } from "lucide-react"
import { useState } from "react"

export default function StringSelector() {
    // 15個の固定文字列配列
    const stringArray = [
        "東京",
        "大阪",
        "京都",
        "北海道",
        "沖縄",
        "福岡",
        "名古屋",
        "神戸",
        "横浜",
        "広島",
        "仙台",
        "札幌",
        "金沢",
        "長崎",
        "鎌倉",
    ]

    const [selectedString, setSelectedString] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [hasSelected, setHasSelected] = useState<boolean>(false)

    const handleStart = () => {
        setIsLoading(true)
        setHasSelected(false)
        setSelectedString(null)

        // ローディング時間をシミュレート（1.5〜3秒）
        const loadingTime = Math.floor(Math.random() * 1500) + 1500

        setTimeout(() => {
            // ランダムに文字列を選択
            const randomIndex = Math.floor(Math.random() * stringArray.length)
            setSelectedString(stringArray[randomIndex])
            setIsLoading(false)
            setHasSelected(true)
        }, loadingTime)
    }

    return (
        <div className="flex min-h-[500px] flex-col items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 shadow-lg">
            <div className="w-full max-w-md">
                <h1 className="mb-6 text-center text-3xl font-bold text-indigo-700">ランダム選択ツール</h1>

                <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
                    <div className="flex min-h-[200px] items-center justify-center">
                        {isLoading ? (
                            <div className="flex flex-col items-center space-y-4">
                                <Loader2 className="size-16 animate-spin text-indigo-600" />
                                <p className="font-medium text-indigo-600">選択中...</p>
                            </div>
                        ) : hasSelected ? (
                            <div className="text-center">
                                <div className="mb-2 animate-fadeIn text-4xl font-bold text-indigo-700">{selectedString}</div>
                                <p className="text-gray-500">が選ばれました！</p>
                            </div>
                        ) : (
                            <div className="text-center text-gray-500">
                                <p>スタートボタンを押して選択を開始してください</p>
                                <div className="mt-4 grid grid-cols-5 gap-2">
                                    {stringArray.map((str, index) => (
                                        <div key={index} className="rounded bg-indigo-100 px-2 py-1 text-center text-sm text-indigo-700">
                                            {str}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={handleStart}
                        disabled={isLoading}
                        className={`
                            rounded-full px-8 py-3 font-medium text-white shadow-lg
                            transition-all duration-300 hover:scale-105
                            ${isLoading ? "cursor-not-allowed bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"}
                        `}
                    >
                        {hasSelected ? "再選択" : "スタート"}
                    </button>
                </div>
            </div>

        </div>
    )
}

