import { type JSX } from 'react';
import { PrimaryButton } from './button';

export function Card({label}: {label: string}): JSX.Element {
    return (
        <div className='mt-12 ml-60 grid gap-y-2 h-screen'>
            <div className='flex place-items-center'>
                <h1 className='text-2xl text-purple-800 font-bold'>{label}</h1>
            </div>
            <div className='flex space-x-6 pr-4'>
                <div className='w-3/4 h-96 border-none rounded-lg bg-white'></div>
                <div className='flex flex-col justify-center place-items-center gap-y-6 bg-white border-none rounded-lg w-3xs h-80'>
                    <div className='px-4'>
                        <div className='text-lg font-bold font-sans'>Set up recurring buys</div>
                        <div className='text-gray-500 text-sm font-semibold'>Schedule regular crypto purchases to balance market fluctuations</div>
                    </div>
                    <div className='text-sm text-purple-600 bg-gray-200 font-semibold border-none rounded-full w-11/12 p-2'>
                        <PrimaryButton label={"Get Started"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export function SecondaryCard(): JSX.Element {
//     return (
//         <div className='bg-white absolute top-50 right-10 w-40 h-72'>
//             <div>
//                 Hello
//             </div>
//         </div>
//     )
// }