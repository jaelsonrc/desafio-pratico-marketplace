import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";



const signInForm = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn(){
  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success('Autenticado com sucesso', {
        description: 'Seja bem vindo!',
        //action: {label: 'Reenviar', onClick: ()=>{}},
      })
    } catch {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <>
      <Helmet title='Login' />
      <div className="p-24 flex flex-col gap-[90px] rounded-[32px]">
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div>
            <div className="flex flex-col gap-2 text-start mb-12">
              <h1 className="text-2xl font-semibold tracking-tight">Acesse sua conta</h1>
              <p className="text-sm text-muted-foreground">Informe seu e-mail e senha para entrar</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
              <div className="flex flex-col gap-[20px] mb-12 mt-12">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-muted-foreground uppercase">e-mail</Label>
                  <Input id="email" type="email" {...register('email')} className="border-b-2 border-gray-300 focus:border-blue-500 outline-none"></Input>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm text-muted-foreground uppercase">password</Label>
                  <Input id="password" type="password" {...register('password')} className="mb-12"></Input>
                </div>
              </div>
              <Button disabled={isSubmitting} className="w-full" type="submit">Acessar</Button>
            </form>
          </div>
        </div>

        <div className="">
            <p className="text-sm text-muted-foreground">Ainda não tem uma conta?</p>
            <a href="" className="w-full">Cadastrar</a>
        </div>
      </div>
    </>
  )
}