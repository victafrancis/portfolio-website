"use client"

import * as React from "react"
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export interface LightboxProps {
  imageSrc: string
  alt: string
  trigger: React.ReactNode
  className?: string
  imageClassName?: string
}

export function Lightbox({
  imageSrc,
  alt,
  trigger,
  className,
  imageClassName
}: LightboxProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className={cn(
          "flex max-w-[90vw] items-center justify-center border-none bg-transparent p-0 shadow-none",
          className
        )}
      >
        <div className="relative max-h-[90vh] max-w-[90vw]">
          <img
            src={imageSrc}
            alt={alt}
            className={cn(
              "max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl",
              imageClassName
            )}
          />
          <DialogClose asChild>
            <button
              type="button"
              className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-black"
            >
              Close
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}