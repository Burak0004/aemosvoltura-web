import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const demoFormSchema = z.object({
  name: z.string().min(2, "Ad soyad en az 2 karakter olmalıdır"),
  company: z.string().min(2, "Şirket adı en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z.string().optional(),
  sector: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "KVKK onayını kabul etmelisiniz")
});

type DemoFormData = z.infer<typeof demoFormSchema>;

export default function DemoForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      sector: "",
      message: "",
      consent: false
    }
  });

  const submitDemo = useMutation({
    mutationFn: async (data: DemoFormData) => {
      return apiRequest("POST", "/api/demo-request", data);
    },
    onSuccess: () => {
      toast({
        title: "Demo Talebi Gönderildi!",
        description: "Ekibimiz en kısa sürede sizinle iletişime geçecek.",
        variant: "default"
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Hata",
        description: error.message || "Demo talebi gönderilirken bir hata oluştu.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    try {
      await submitDemo.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectors = [
    { value: "cement", label: "Çimento" },
    { value: "steel", label: "Demir-Çelik" },
    { value: "food", label: "Gıda İşleme" },
    { value: "chemical", label: "Kimya" },
    { value: "textile", label: "Tekstil" },
    { value: "other", label: "Diğer" }
  ];

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-slate-900 font-medium">Ad Soyad *</Label>
          <Input
            id="name"
            {...form.register("name")}
            className="form-input mt-2"
            placeholder="Adınızı girin"
          />
          {form.formState.errors.name && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="company" className="text-slate-900 font-medium">Şirket *</Label>
          <Input
            id="company"
            {...form.register("company")}
            className="form-input mt-2"
            placeholder="Şirket adınızı girin"
          />
          {form.formState.errors.company && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.company.message}</p>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email" className="text-slate-900 font-medium">E-posta *</Label>
          <Input
            id="email"
            type="email"
            {...form.register("email")}
            className="form-input mt-2"
            placeholder="E-posta adresinizi girin"
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="phone" className="text-slate-900 font-medium">Telefon</Label>
          <Input
            id="phone"
            type="tel"
            {...form.register("phone")}
            className="form-input mt-2"
            placeholder="Telefon numaranızı girin"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="sector" className="text-slate-900 font-medium">Sektör</Label>
        <Select onValueChange={(value) => form.setValue("sector", value)}>
          <SelectTrigger className="dropdown-menu mt-2 h-12">
            <SelectValue placeholder="Sektör seçin" />
          </SelectTrigger>
          <SelectContent className="dropdown-menu">
            {sectors.map((sector) => (
              <SelectItem key={sector.value} value={sector.value} className="dropdown-item">
                {sector.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="message" className="text-slate-900 font-medium">Mesaj</Label>
        <Textarea
          id="message"
          {...form.register("message")}
          rows={4}
          className="form-input mt-2 min-h-[100px] resize-none"
          placeholder="Projenizle ilgili detayları paylaşın..."
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox
          id="consent"
          checked={form.watch("consent")}
          onCheckedChange={(checked) => form.setValue("consent", checked as boolean)}
          className="border-gray-300 focus:ring-voltura-green"
        />
        <Label htmlFor="consent" className="text-sm text-slate-600">
          KVKK kapsamında kişisel verilerimin işlenmesini kabul ediyorum.
        </Label>
      </div>
      {form.formState.errors.consent && (
        <p className="text-red-500 text-sm">{form.formState.errors.consent.message}</p>
      )}
      
      <Button
        type="submit"
        disabled={isSubmitting}
        variant="cta"
        size="lg"
        className="w-full group"
      >
        <Send className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform" />
        {isSubmitting ? "Gönderiliyor..." : "Demo Talep Et"}
      </Button>
    </form>
  );
}
