'use client'

import { Button, Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'

export default function Modal({children,isOpen, close, className, id}) {

  return (
    <>
      <Dialog id={id} open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
      <DialogBackdrop className="fixed inset-0 bg-black/70" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className={`modal ${className}`}
            >
                {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}