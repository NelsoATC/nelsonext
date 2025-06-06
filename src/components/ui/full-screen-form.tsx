
import * as React from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FullScreenFormProps {
  open: boolean
  onClose: () => void
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
}

const FullScreenForm = ({ 
  open, 
  onClose, 
  title, 
  description, 
  children, 
  className 
}: FullScreenFormProps) => {
  // Handle escape key
  React.useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscKey)
    
    // Disable body scroll when form is open
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-background/95 backdrop-blur-sm">
      <div 
        className={cn(
          "relative w-full h-full p-6 overflow-auto",
          "animate-in fade-in duration-300",
          className
        )}
      >
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg my-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              {title && <h2 className="text-xl font-bold">{title}</h2>}
              {description && <p className="text-gray-500 text-sm">{description}</p>}
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose} 
              className="h-8 w-8 rounded-full"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export { FullScreenForm }
