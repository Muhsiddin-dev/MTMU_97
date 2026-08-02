import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React, { ReactNode } from 'react'
import { Input } from '../ui/input'

interface TypeDialogPostStar {
    children: ReactNode,
    open: boolean,
    onOpenChange: (open: boolean) => void,
    data: object
}

function DialogPostStar({ children, open, onOpenChange, data }: TypeDialogPostStar) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className='min-w-xl w-full'>
                <DialogHeader>
                    <DialogTitle className='line-clamp-2 text-xl font-bold'>
                        Рейтинг мондан
                    </DialogTitle>
                    <DialogDescription>
                        Ташаккур, ки ба мо бовар кардед ва моро дастгирӣ мекунед. Барои рейтинг мондан маълумотҳоро пурра пур кунед.
                    </DialogDescription>
                </DialogHeader>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <div className='flex flex-col gap-1'>
                        <label className='font-semibold text-gray-500'>Ному Насаб</label>
                        <Input className='border border-gray-300' type="text" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='font-semibold text-gray-500'>Рақами телефон</label>
                        <Input placeholder='+992' className='border border-gray-300' type="tel" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='font-semibold text-gray-500'>Почтаи электронӣ</label>
                        <Input placeholder='example@gmail.com' className='border border-gray-300' type="email" />
                    </div>
                    <div className='col-span-2 flex flex-col gap-1'>
                        <label className='font-semibold text-gray-500'>Шарҳ ё фикр</label>
                        <textarea placeholder='...' className="w-full mt-1 p-2 rounded-lg border border-slate-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800 dark:text-white outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none transition-all" />
                    </div>
                </div>

                <DialogFooter>
                    <Button type='button' variant="outline" className='px-4 py-2 rounded-md transition-colors' onClick={() => onOpenChange(false)}>Ба қафо</Button>
                    <Button className='text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition-colors' onClick={() => { }}>Равон кардан</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DialogPostStar