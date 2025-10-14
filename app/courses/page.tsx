'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Search, BookOpen, Users, Star, ArrowRight, Target, BarChart3, Calendar } from 'lucide-react';

// Mock data - cursos de concursos
const courses = [
  {
    id: 'bacen',
    name: 'BACEN - Banco Central',
    description: 'Preparação completa para o Banco Central do Brasil - Analista e Procurador',
    image: '🏛️',
    totalSubjects: 8,
    totalFlashcards: 1250,
    progress: 65,
    difficulty: 'Alta',
    popularity: 95,
    lastUpdate: '2024-01-15',
    banca: 'FGV',
    vagas: 120,
    salario: 'R$ 22.000',
    color: 'bg-blue-500',
    subjects: ['Direito Constitucional', 'Direito Administrativo', 'Economia', 'Finanças Públicas', 'Contabilidade', 'Estatística', 'TI', 'Inglês']
  },
  {
    id: 'receita-federal',
    name: 'Receita Federal',
    description: 'Auditor-Fiscal da Receita Federal - Edital 2024',
    image: '💰',
    totalSubjects: 12,
    totalFlashcards: 1850,
    progress: 30,
    difficulty: 'Altíssima',
    popularity: 98,
    lastUpdate: '2024-01-10',
    banca: 'ESAF',
    vagas: 200,
    salario: 'R$ 25.000',
    color: 'bg-green-500',
    subjects: ['Direito Tributário', 'Contabilidade', 'Auditoria', 'Estatística', 'Economia', 'Finanças Públicas', 'Legislação Aduaneira', 'Administração Geral', 'TI', 'Inglês', 'Espanhol', 'Ética']
  },
  {
    id: 'icms-sp',
    name: 'ICMS-SP',
    description: 'Secretaria da Fazenda de São Paulo - Auditor Fiscal',
    image: '📊',
    totalSubjects: 10,
    totalFlashcards: 1520,
    progress: 0,
    difficulty: 'Alta',
    popularity: 85,
    lastUpdate: '2024-01-12',
    banca: 'VUNESP',
    vagas: 150,
    salario: 'R$ 18.000',
    color: 'bg-purple-500',
    subjects: ['Direito Tributário', 'Direito Constitucional', 'Direito Administrativo', 'Contabilidade', 'Auditoria', 'Estatística', 'Finanças Públicas', 'Legislação Estadual', 'TI', 'Português']
  },
  {
    id: 'policia-federal',
    name: 'Polícia Federal',
    description: 'Perito Criminal Federal - Áreas: Contábil, TI e Engenharia',
    image: '🔍',
    totalSubjects: 11,
    totalFlashcards: 1600,
    progress: 20,
    difficulty: 'Altíssima',
    popularity: 96,
    lastUpdate: '2024-01-05',
    banca: 'CESPE',
    vagas: 80,
    salario: 'R$ 23.000',
    color: 'bg-red-500',
    subjects: ['Direito Constitucional', 'Direito Administrativo', 'Direito Penal', 'Legislação Especial', 'Contabilidade', 'TI', 'Engenharia', 'Química', 'Física', 'Medicina Legal', 'Português']
  },
  {
    id: 'tcu',
    name: 'TCU',
    description: 'Tribunal de Contas da União - Auditor Federal de Controle Externo',
    image: '⚖️',
    totalSubjects: 9,
    totalFlashcards: 1480,
    progress: 45,
    difficulty: 'Alta',
    popularity: 92,
    lastUpdate: '2024-01-14',
    banca: 'CESPE',
    vagas: 50,
    salario: 'R$ 26.000',
    color: 'bg-orange-500',
    subjects: ['Direito Constitucional', 'Direito Administrativo', 'Contabilidade Pública', 'Auditoria Governamental', 'Finanças Públicas', 'Administração Pública', 'TI', 'Estatística', 'Português']
  },
  {
    id: 'bb',
    name: 'Banco do Brasil',
    description: 'Escriturário e Agente Comercial - 2024',
    image: '🏦',
    totalSubjects: 6,
    totalFlashcards: 850,
    progress: 80,
    difficulty: 'Média',
    popularity: 88,
    lastUpdate: '2024-01-08',
    banca: 'FUNDATEC',
    vagas: 2000,
    salario: 'R$ 4.500',
    color: 'bg-yellow-500',
    subjects: ['Matemática Financeira', 'Conhecimentos Bancários', 'Português', 'Informática', 'Atendimento', 'Vendas']
  }
];

const stats = [
  { label: 'Total de Flashcards', value: '8.550', icon: BookOpen },
  { label: 'Cursos Disponíveis', value: '12', icon: Target },
  { label: 'Disciplinas', value: '86', icon: BarChart3 },
  { label: 'Estudantes Ativos', value: '2.847', icon: Users }
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || 
                            course.difficulty.toLowerCase().includes(selectedDifficulty);
    return matchesSearch && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'baixa': return 'bg-green-100 text-green-800';
      case 'média': return 'bg-yellow-100 text-yellow-800';
      case 'alta': return 'bg-orange-100 text-orange-800';
      case 'altíssima': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <Target className="w-8 h-8 mr-3 text-blue-600" />
                FlashConcursos
              </h1>
              <p className="text-gray-600 mt-1">
                Plataforma de estudos com flashcards para os principais concursos públicos
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <BarChart3 className="w-4 h-4 mr-2" />
              Meu Progresso
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar por curso, disciplina ou conteúdo..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-0 shadow-sm"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedDifficulty === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedDifficulty('all')}
                  size="sm"
                >
                  Todos
                </Button>
                <Button
                  variant={selectedDifficulty === 'média' ? 'default' : 'outline'}
                  onClick={() => setSelectedDifficulty('média')}
                  size="sm"
                >
                  Média
                </Button>
                <Button
                  variant={selectedDifficulty === 'alta' ? 'default' : 'outline'}
                  onClick={() => setSelectedDifficulty('alta')}
                  size="sm"
                >
                  Alta
                </Button>
                <Button
                  variant={selectedDifficulty === 'altíssima' ? 'default' : 'outline'}
                  onClick={() => setSelectedDifficulty('altíssima')}
                  size="sm"
                >
                  Altíssima
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`${course.color} w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl`}>
                      {course.image}
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {course.name}
                      </CardTitle>
                      <CardDescription className="text-xs mt-1">
                        {course.banca} • {course.vagas} vagas
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className={getDifficultyColor(course.difficulty)}>
                    {course.difficulty}
                  </Badge>
                </div>
                
                <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                  <div className="flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-500" />
                    <span>{course.popularity}% popular</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>Atualizado {course.lastUpdate}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progresso</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>

                {/* Subjects Preview */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Disciplinas ({course.totalSubjects})
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {course.subjects.slice(0, 3).map((subject, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                    {course.subjects.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{course.subjects.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Course Info */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    <span>{course.totalFlashcards} flashcards</span>
                  </div>
                  <div className="text-green-600 font-semibold">
                    {course.salario}
                  </div>
                </div>

                <Button asChild className="w-full group-hover:bg-blue-600 transition-colors">
                  <Link href={`/courses/${course.id}`}>
                    Acessar Curso
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum curso encontrado</h3>
            <p className="text-gray-500">Tente ajustar os filtros ou termos de busca</p>
          </div>
        )}
      </div>
    </div>
  );
}