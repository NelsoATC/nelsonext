
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTallyForm } from "@/hooks/useTallyForm";

interface ContactDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
}

export const ContactDialog = ({ isOpen, onOpenChange, title, description }: ContactDialogProps) => {
  // Use the new hook to load Tally with URL tracking and conversion tracking
  useTallyForm(isOpen);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <iframe 
            data-tally-src="https://tally.so/r/meYkal?transparentBackground=1&hideTitle=1" 
            width="100%" 
            height="450" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0} 
            title="Formulario de contacto"
            id="contact-dialog-form"
            name="contact-dialog-form"
            style={{ marginTop: '-30px' }}  // Increased negative margin to compensate
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};
