'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ArrowLeft, Mail, CheckCircle, Key, ArrowRight } from 'lucide-react';

// Schema de validação com Zod
const forgotPasswordSchema = z.object({
  email: z.string().email('Por favor, insira um e-mail válido'),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Inicialização do formulário com react-hook-form
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setIsLoading(true);

    // Simulação de envio de e-mail
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Solicitação de recuperação para:', data.email);
      // Aqui você faria a chamada à API para enviar o e-mail de recuperação
      setIsSubmitted(true);
    } catch (error) {
      console.error('Erro na recuperação de senha:', error);
      form.setError('email', {
        type: 'manual',
        message: 'Erro ao enviar e-mail. Tente novamente.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Se o formulário foi enviado com sucesso, mostra a confirmação
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              E-mail Enviado!
            </CardTitle>
            <CardDescription className="text-gray-600 text-base">
              Enviamos um link de recuperação para o e-mail informado.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Verifique sua caixa de entrada e clique no link que enviamos para redefinir sua senha.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
                <h4 className="font-medium text-blue-900 mb-2 flex items-center">
                  <Key className="w-4 h-4 mr-2" />
                  Dicas importantes:
                </h4>
                <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                  <li>Verifique a pasta de spam caso não encontre o e-mail</li>
                  <li>O link expira em 1 hora por segurança</li>
                  <li>Não compartilhe o link com outras pessoas</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                <Link href="/login">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Fazer Login
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="w-full">
                <Link href="/forgot-password" onClick={() => setIsSubmitted(false)}>
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar outro e-mail
                </Link>
              </Button>
            </div>

            <div className="text-center pt-4 border-t">
              <p className="text-sm text-gray-600">
                Não recebeu o e-mail?{' '}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-green-600 hover:text-green-500 font-medium transition-colors"
                >
                  Tentar novamente
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-100 px-4">
      <Card className="w-full my-10 max-w-md shadow-xl">
        <CardHeader className="space-y-1">
          <Button asChild variant="ghost" className="w-fit p-0 h-auto mb-2">
            <Link href="/login" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o login
            </Link>
          </Button>
          
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <Key className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <CardTitle className="text-2xl font-bold text-center text-gray-900">
            Recuperar Senha
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            Digite seu e-mail e enviaremos um link para redefinir sua senha
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail cadastrado</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="seu@email.com"
                          type="email"
                          className="pl-10"
                          disabled={isLoading}
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Link de Recuperação
                  </>
                )}
              </Button>
            </form>
          </Form>

          <div className="mt-6 space-y-4">
            {/* Informações importantes */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-medium text-amber-900 mb-2 flex items-center">
                <Key className="w-4 h-4 mr-2" />
                Como funciona:
              </h4>
              <ul className="text-amber-800 text-sm space-y-1 list-disc list-inside">
                <li>Enviaremos um link seguro para seu e-mail</li>
                <li>Clique no link para criar uma nova senha</li>
                <li>O link é válido por 1 hora</li>
                <li>Verifique sua pasta de spam se não encontrar</li>
              </ul>
            </div>

            {/* Links de apoio */}
            <div className="text-center space-y-3">
              <p className="text-sm text-gray-600">
                Lembrou sua senha?{' '}
                <Link
                  href="/login"
                  className="text-orange-600 hover:text-orange-500 font-medium transition-colors"
                >
                  Fazer login
                </Link>
              </p>
              
              <p className="text-sm text-gray-600">
                Não tem uma conta?{' '}
                <Link
                  href="/register"
                  className="text-orange-600 hover:text-orange-500 font-medium transition-colors"
                >
                  Cadastre-se
                </Link>
              </p>
            </div>
          </div>

          {/* Suporte */}
          <div className="mt-6 pt-4 border-t">
            <div className="text-center">
              <p className="text-xs text-gray-500">
                Problemas para recuperar sua conta?{' '}
                <Link
                  href="/support"
                  className="text-orange-600 hover:text-orange-500 font-medium"
                >
                  Contate o suporte
                </Link>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}