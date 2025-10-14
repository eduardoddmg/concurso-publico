'use client';

import { use } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, BookOpen, Clock, Users, Star, Target, Play, BarChart3 } from 'lucide-react';

// Mock data - detalhes do curso
const courseDetails = {
  'bacen': {
    id: 'bacen',
    name: 'BACEN - Banco Central',
    description: 'Preparação completa para o Banco Central do Brasil - Analista e Procurador',
    image: '🏛️',
    color: 'bg-blue-500',
    banca: 'FGV',
    vagas: 120,
    salario: 'R$ 22.000',
    progress: 65,
    totalFlashcards: 1250,
    subjects: [
      {
        id: 'direito-constitucional',
        name: 'Direito Constitucional',
        description: 'Princípios fundamentais, direitos e garantias, organização do Estado',
        totalFlashcards: 180,
        progress: 80,
        difficulty: 'Alta',
        estimatedTime: '45h',
        color: 'bg-red-100 text-red-800'
      },
      {
        id: 'direito-administrativo',
        name: 'Direito Administrativo',
        description: 'Ato administrativo, licitações, servidores públicos, improbidade',
        totalFlashcards: 160,
        progress: 70,
        difficulty: 'Alta',
        estimatedTime: '40h',
        color: 'bg-blue-100 text-blue-800'
      },
      {
        id: 'economia',
        name: 'Economia',
        description: 'Microeconomia, macroeconomia, sistema financeiro, política monetária',
        totalFlashcards: 200,
        progress: 60,
        difficulty: 'Altíssima',
        estimatedTime: '60h',
        color: 'bg-green-100 text-green-800'
      },
      {
        id: 'financas-publicas',
        name: 'Finanças Públicas',
        description: 'Orçamento público, despesa pública, receita pública, dívida pública',
        totalFlashcards: 150,
        progress: 50,
        difficulty: 'Alta',
        estimatedTime: '35h',
        color: 'bg-purple-100 text-purple-800'
      },
      {
        id: 'contabilidade',
        name: 'Contabilidade',
        description: 'Contabilidade geral, pública, custos, análise das demonstrações',
        totalFlashcards: 190,
        progress: 75,
        difficulty: 'Alta',
        estimatedTime: '55h',
        color: 'bg-orange-100 text-orange-800'
      },
      {
        id: 'estatistica',
        name: 'Estatística',
        description: 'Probabilidade, inferência estatística, amostragem, séries temporais',
        totalFlashcards: 140,
        progress: 40,
        difficulty: 'Média',
        estimatedTime: '30h',
        color: 'bg-indigo-100 text-indigo-800'
      },
      {
        id: 'ti',
        name: 'Tecnologia da Informação',
        description: 'Banco de dados, redes, segurança, governança de TI, LGPD',
        totalFlashcards: 130,
        progress: 55,
        difficulty: 'Média',
        estimatedTime: '25h',
        color: 'bg-teal-100 text-teal-800'
      },
      {
        id: 'ingles',
        name: 'Língua Inglesa',
        description: 'Compreensão textual, gramática, vocabulário técnico',
        totalFlashcards: 100,
        progress: 90,
        difficulty: 'Baixa',
        estimatedTime: '20h',
        color: 'bg-pink-100 text-pink-800'
      }
    ]
  }
};

export default function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const resolvedParams = use(params);
  const course = courseDetails[resolvedParams.courseId as keyof typeof courseDetails];

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Curso não encontrado</h2>
            <p className="text-gray-600 mb-4">O curso solicitado não existe ou foi removido.</p>
            <Button asChild>
              <Link href="/courses">
                Voltar para Cursos
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/courses" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para Cursos
              </Link>
            </Button>
            
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className={`${course.color} w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl`}>
                  {course.image}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{course.name}</h1>
                  <p className="text-gray-600 mt-1">{course.description}</p>
                  
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-1" />
                      <span>{course.banca}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{course.vagas} vagas</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      <span>Salário: {course.salario}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{course.progress}%</div>
                <div className="text-sm text-gray-500">Progresso Geral</div>
                <Progress value={course.progress} className="w-32 mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Subjects List */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Disciplinas</h2>
              <div className="flex items-center text-sm text-gray-500">
                <BookOpen className="w-4 h-4 mr-1" />
                <span>{course.totalFlashcards} flashcards disponíveis</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.subjects.map((subject) => (
                <Card key={subject.id} className="hover:shadow-lg transition-shadow border-0 shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{subject.name}</CardTitle>
                        <CardDescription className="mt-1 line-clamp-2">
                          {subject.description}
                        </CardDescription>
                      </div>
                      <Badge className={subject.color}>
                        {subject.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        <span>{subject.totalFlashcards} cards</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{subject.estimatedTime}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progresso</span>
                        <span>{subject.progress}%</span>
                      </div>
                      <Progress value={subject.progress} className="h-2" />
                    </div>

                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <Link href={`/study/${subject.id}`}>
                          <Play className="w-4 h-4 mr-2" />
                          Estudar
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href={`/subjects/${subject.id}`}>
                          <BarChart3 className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Estatísticas do Curso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{course.progress}%</div>
                  <div className="text-sm text-gray-500">Conclusão Geral</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Disciplinas Concluídas</span>
                    <span className="font-semibold">
                      {course.subjects.filter(s => s.progress === 100).length}/{course.subjects.length}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Flashcards Estudados</span>
                    <span className="font-semibold">
                      {Math.round(course.totalFlashcards * course.progress / 100)}/{course.totalFlashcards}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tempo Estimado</span>
                    <span className="font-semibold">320h</span>
                  </div>
                </div>

                <Button className="w-full" size="sm">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Ver Estatísticas Detalhadas
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}