import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, FileText, AlertTriangle } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Termos de Serviço</h1>
              <p className="text-gray-600">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
            </div>
          </div>
          <Button asChild variant="outline">
            <Link href="/register">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Shield className="w-5 h-5 mr-2 text-blue-600" />
              Contrato do Usuário
            </CardTitle>
            <CardDescription>
              Leia atentamente estes termos antes de usar nossa plataforma
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Alert */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-amber-600 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium text-amber-800">Aviso Importante</h3>
                  <p className="text-amber-700 text-sm mt-1">
                    Ao criar uma conta em nossa plataforma, você concorda com todos os termos e condições descritos abaixo.
                  </p>
                </div>
              </div>
            </div>

            {/* Sections */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">1. Aceitação dos Termos</h2>
              <p className="text-gray-700 leading-relaxed">
                Ao acessar e usar nossa plataforma, você concorda em cumprir e estar vinculado a estes Termos de Serviço. 
                Se você não concordar com qualquer parte destes termos, não poderá usar nossos serviços.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">2. Cadastro e Conta</h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>2.1.</strong> Para usar certos recursos da plataforma, você deve criar uma conta fornecendo informações precisas e completas.</p>
                <p><strong>2.2.</strong> Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorrem em sua conta.</p>
                <p><strong>2.3.</strong> Você deve ter pelo menos 18 anos ou a idade legal em sua jurisdição para criar uma conta.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">3. Condutas do Usuário</h2>
              <div className="space-y-2 text-gray-700">
                <p>Você concorda em não:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Violar qualquer lei ou regulamento aplicável</li>
                  <li>Infringir direitos de propriedade intelectual</li>
                  <li>Distribuir malware ou conteúdo malicioso</li>
                  <li>Realizar atividades fraudulentas</li>
                  <li>Assediar outros usuários</li>
                  <li>Tentar obter acesso não autorizado a sistemas</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">4. Propriedade Intelectual</h2>
              <p className="text-gray-700 leading-relaxed">
                Todo o conteúdo, marcas, logos e software presentes na plataforma são de nossa propriedade ou de nossos 
                licenciadores e estão protegidos pelas leis de propriedade intelectual.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">5. Limitação de Responsabilidade</h2>
              <p className="text-gray-700 leading-relaxed">
                Nossa plataforma é fornecida no estado em que se encontra. Não garantimos que o serviço será 
                ininterrupto ou livre de erros. Em nenhum caso seremos responsáveis por quaisquer danos indiretos, 
                incidentais ou consequenciais.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">6. Modificações do Serviço</h2>
              <p className="text-gray-700 leading-relaxed">
                Reservamo-nos o direito de modificar ou descontinuar, temporária ou permanentemente, o serviço com ou 
                sem aviso prévio. Também podemos alterar estes termos a qualquer momento, e o uso continuado da 
                plataforma constitui aceitação das modificações.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">7. Rescisão</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos rescindir ou suspender sua conta imediatamente, sem aviso prévio, por qualquer violação 
                destes Termos de Serviço.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">8. Lei Aplicável</h2>
              <p className="text-gray-700 leading-relaxed">
                Estes termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar 
                conflitos de disposições legais.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">9. Contato</h2>
              <p className="text-gray-700 leading-relaxed">
                Se você tiver alguma dúvida sobre estes Termos de Serviço, entre em contato conosco através 
                do e-mail: <span className="text-blue-600">legal@empresa.com</span>
              </p>
            </section>

            {/* Acceptance */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Ao usar nossa plataforma, você confirma que leu, compreendeu e concorda com estes Termos de Serviço.
                  </h3>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Nossa Empresa. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}