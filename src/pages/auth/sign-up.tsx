import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";



const signUpForm = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp(){
  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      //toast.success('Autenticado com sucesso', {
        //description: 'Seja bem vindo!',
        //action: {label: 'Reenviar', onClick: ()=>{}},
      //})
    } catch {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <>
      <Helmet title='Cadastro' />
      <div className="p-24">
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-start">
            <h1 className="text-2xl font-semibold tracking-tight">Crie sua conta</h1>
            <p className="text-sm text-muted-foreground">Informe os seus dados pessoais e de acesso</p>
          </div>

        </div>
      </div>
    </>
  )
}