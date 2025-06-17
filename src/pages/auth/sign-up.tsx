import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const _signUpForm = z.object({
  restaurantName: z.string(),
  email: z.string().email(),
  managerName: z.string(),
  phone: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  const navigate = useNavigate()

  function handleBackSignIn() {
    navigate('/sign-in')
  }

  async function handleSigIn(data: SignUpForm) {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 200));
    toast.success("Cadastro realizado com sucesso", {
      action: {
        label: "Entrar",
        onClick: () => handleBackSignIn(),
      },
    });
  }

  return (
    <div className="p-8">
      <Button asChild variant="link" className="absolute right-8 top-8">
        <Link to="/sign-in">Acessar painel</Link>
      </Button>
      <div className="w-[350px] flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar conta grátis
          </h1>
          <p className="text-sm text-muted-foreground">
            Seja um parceiro e comece suas vendas
          </p>
        </div>

        <form onSubmit={handleSubmit(handleSigIn)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
            <Input
              id="restaurantName"
              type="text"
              {...register("restaurantName")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="managerName">Seu nome</Label>
            <Input id="managerName" type="text" {...register("managerName")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register("email")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone do estabelecimento</Label>
            <Input id="phone" type="text" {...register("phone")} />
          </div>
          <Button disabled={isSubmitting} className="w-full" type="submit">
            Cadastro
          </Button>
        </form>
      </div>
    </div>
  );
}
