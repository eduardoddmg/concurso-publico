import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Lock, Eye, Database, Share2, Mail } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Política de Privacidade</h1>
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
              <Lock className="w-5 h-5 mr-2 text-green-600" />
              Proteção de Dados
            </CardTitle>
            <CardDescription>
              Saiba como coletamos, usamos e protegemos suas informações
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Introdução</h2>
              <p className="text-gray-700 leading-relaxed">
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas 
                informações pessoais quando você usa nossa plataforma. Estamos comprometidos em proteger sua 
                privacidade e garantir a segurança de seus dados.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Database className="w-5 h-5 mr-2 text-blue-600" />
                1. Informações que Coletamos
              </h2>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Informações Pessoais</h3>
                  <ul className="list-disc list-inside text-blue-800 space-y-1">
                    <li>Nome completo</li>
                    <li>Endereço de e-mail</li>
                    <li>Dados de cadastro e perfil</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-medium text-purple-900 mb-2">Dados de Uso</h3>
                  <ul className="list-disc list-inside text-purple-800 space-y-1">
                    <li>Endereço IP e informações do dispositivo</li>
                    <li>Logs de acesso e atividade</li>
                    <li>Cookies e tecnologias similares</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Eye className="w-5 h-5 mr-2 text-purple-600" />
                2. Como Usamos suas Informações
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Finalidades Principais</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Fornecer e manter nossos serviços</li>
                    <li>Processar suas transações</li>
                    <li>Enviar notificações importantes</li>
                    <li>Oferecer suporte ao cliente</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Melhorias e Marketing</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Personalizar sua experiência</li>
                    <li>Desenvolver novos recursos</li>
                    <li>Enviar comunicações de marketing</li>
                    <li>Analisar uso da plataforma</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Share2 className="w-5 h-5 mr-2 text-orange-600" />
                3. Compartilhamento de Dados
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Não vendemos suas informações pessoais. Podemos compartilhar seus dados apenas nas seguintes situações:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>• Prestadores de serviço:</strong> Empresas que nos auxiliam na operação da plataforma</p>
                <p><strong>• Requisições legais:</strong> Quando exigido por lei ou processo legal</p>
                <p><strong>• Proteção de direitos:</strong> Para proteger nossos direitos, propriedade ou segurança</p>
                <p><strong>• Fusões/aquisições:</strong> Em caso de transação corporativa</p>
              </div>
            </section>

            {/* Data Security */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">4. Segurança de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas 
                informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-medium text-green-800 mb-2">Medidas de Segurança</h3>
                <ul className="list-disc list-inside text-green-700 space-y-1">
                  <li>Criptografia de dados em trânsito e em repouso</li>
                  <li>Controles de acesso baseados em função</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Backups regulares dos dados</li>
                </ul>
              </div>
            </section>

            {/* Cookies */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">5. Cookies e Tecnologias Similares</h2>
              <p className="text-gray-700 leading-relaxed">
                Usamos cookies e tecnologias similares para melhorar sua experiência, analisar o tráfego do site 
                e personalizar conteúdo. Você pode controlar o uso de cookies através das configurações do seu navegador.
              </p>
            </section>

            {/* Your Rights */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">6. Seus Direitos</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Direitos do Titular</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Acessar seus dados pessoais</li>
                    <li>Corrigir informações imprecisas</li>
                    <li>Solicitar a exclusão de dados</li>
                    <li>Revocar consentimentos</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Controles Adicionais</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Opt-out de marketing</li>
                    <li>Configurações de privacidade</li>
                    <li>Exportar seus dados</li>
                    <li>Restringir processamento</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">7. Retenção de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades 
                descritas nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
              </p>
            </section>

            {/* International Transfers */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">8. Transferências Internacionais</h2>
              <p className="text-gray-700 leading-relaxed">
                Seus dados podem ser processados em servidores localizados fora do seu país de residência. 
                Garantimos que todas as transferências internacionais de dados são realizadas com proteções 
                adequadas de segurança.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">9. Alterações nesta Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre 
                mudanças significativas publicando a nova política em nossa plataforma ou enviando um aviso por e-mail.
              </p>
            </section>

            {/* Contact */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-red-600" />
                10. Contato
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, 
                entre em contato conosco:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>E-mail:</strong> privacidade@empresa.com<br/>
                  <strong>Telefone:</strong> (11) 9999-9999<br/>
                  <strong>Endereço:</strong> Rua Exemplo, 123 - São Paulo, SP
                </p>
              </div>
            </section>

            {/* Consent */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Lock className="w-5 h-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Ao usar nossa plataforma, você concorda com os termos desta Política de Privacidade.
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