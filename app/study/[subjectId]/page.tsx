'use client';

import { use, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Check, X, HelpCircle, BookOpen, Target } from 'lucide-react';
import Link from 'next/link';

// Mock data - flashcards por disciplina
const subjectFlashcards = {
  'direito-constitucional': {
    id: 'direito-constitucional',
    name: 'Direito Constitucional',
    totalFlashcards: 180,
    progress: 80,
    flashcards: [
      {
        id: 1,
        front: 'Qual o conceito de Constituição segundo José Afonso da Silva?',
        back: 'Constituição é o conjunto de normas que organiza os elementos constitutivos do Estado.',
        difficulty: 'Fácil',
        category: 'Conceitos Fundamentais',
        lastReviewed: '2024-01-10'
      },
      {
        id: 2,
        front: 'Quais são os Poderes da União e quais suas funções típicas?',
        back: 'Legislativo ( legislar e fiscalizar), Executivo ( administrar e governar) e Judiciário ( julgar). São independentes e harmônicos entre si.',
        difficulty: 'Médio',
        category: 'Organização do Estado',
        lastReviewed: '2024-01-12'
      },
      {
        id: 3,
        front: 'O que são direitos fundamentais de primeira dimensão?',
        back: 'São os direitos individuais e liberdades públicas, com ênfase na liberdade e na abstenção estatal. Ex: direito à vida, liberdade, propriedade.',
        difficulty: 'Difícil',
        category: 'Direitos Fundamentais',
        lastReviewed: '2024-01-08'
      },
      {
        id: 4,
        front: 'Qual a diferença entre controle concentrado e difuso de constitucionalidade?',
        back: 'Controle concentrado: realizado somente pelo STF, com efeito erga omnes. Controle difuso: realizado por qualquer juiz, com efeito inter partes.',
        difficulty: 'Difícil',
        category: 'Controle de Constitucionalidade',
        lastReviewed: null
      },
      {
        id: 5,
        front: 'O que é o princípio da simetria na federação brasileira?',
        back: 'É o princípio que estabelece que a organização dos Municípios, Estados e DF deve seguir o modelo da União, especialmente na separação de Poderes.',
        difficulty: 'Médio',
        category: 'Federação',
        lastReviewed: null
      }
    ]
  }
};

export default function StudyPage({ params }: { params: Promise<{ subjectId: string }> }) {
  const resolvedParams = use(params);
  const subject = subjectFlashcards[resolvedParams.subjectId as keyof typeof subjectFlashcards];
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionProgress, setSessionProgress] = useState(0);
  const [sessionCards, setSessionCards] = useState(subject.flashcards);

  if (!subject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Disciplina não encontrada</h2>
            <p className="text-gray-600 mb-4">A disciplina solicitada não existe ou foi removida.</p>
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

  const currentCard = sessionCards[currentCardIndex];
  const progress = ((currentCardIndex + 1) / sessionCards.length) * 100;

  const handleNext = (difficulty: 'easy' | 'medium' | 'hard') => {
    // Aqui você salvaria o progresso do usuário
    if (currentCardIndex < sessionCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
      setSessionProgress(sessionProgress + 1);
    } else {
      // Sessão concluída
      alert('Sessão concluída! Parabéns!');
      setCurrentCardIndex(0);
      setIsFlipped(false);
      setSessionProgress(0);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'fácil': return 'bg-green-100 text-green-800';
      case 'médio': return 'bg-yellow-100 text-yellow-800';
      case 'difícil': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button asChild variant="ghost" size="sm">
                  <Link href="/courses" className="flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Link>
                </Button>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{subject.name}</h1>
                  <p className="text-gray-600 text-sm">
                    Sessão de Estudo • Card {currentCardIndex + 1} de {sessionCards.length}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-600">Progresso da Sessão</div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-1 text-green-500" />
                    <span className="font-semibold">{sessionProgress} revisados</span>
                  </div>
                </div>
              </div>
            </div>

            <Progress value={progress} className="mt-4" />
          </div>
        </div>
      </div>

      {/* Flashcard */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center">
          {/* Card Info */}
          <div className="flex items-center justify-between w-full max-w-2xl mb-6">
            <Badge variant="secondary" className={getDifficultyColor(currentCard.difficulty)}>
              {currentCard.difficulty}
            </Badge>
            <Badge variant="outline">
              {currentCard.category}
            </Badge>
            <div className="flex items-center text-sm text-gray-500">
              <BookOpen className="w-4 h-4 mr-1" />
              Card {currentCardIndex + 1}/{sessionCards.length}
            </div>
          </div>

          {/* Flashcard */}
          <Card 
            className="w-full max-w-2xl h-96 cursor-pointer shadow-xl border-0"
            onClick={handleFlip}
          >
            <CardContent className="p-8 h-full flex items-center justify-center">
              <div className="text-center w-full">
                {!isFlipped ? (
                  <div>
                    <div className="text-lg text-gray-500 mb-4">PERGUNTA</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
                      {currentCard.front}
                    </h2>
                    <p className="text-gray-500 flex items-center justify-center">
                      <HelpCircle className="w-4 h-4 mr-2" />
                      Clique para ver a resposta
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="text-lg text-gray-500 mb-4">RESPOSTA</div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed">
                      {currentCard.front}
                    </h2>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <p className="text-lg text-gray-800 leading-relaxed">
                        {currentCard.back}
                      </p>
                    </div>
                    <p className="text-gray-500 text-sm">
                      Como foi o seu desempenho?
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Controls */}
          {isFlipped && (
            <div className="mt-8 flex gap-4">
              <Button 
                variant="outline" 
                className="border-red-200 text-red-600 hover:bg-red-50"
                onClick={() => handleNext('hard')}
                size="lg"
              >
                <X className="w-5 h-5 mr-2" />
                Difícil
              </Button>
              
              <Button 
                variant="outline"
                className="border-yellow-200 text-yellow-600 hover:bg-yellow-50"
                onClick={() => handleNext('medium')}
                size="lg"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                Médio
              </Button>
              
              <Button 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => handleNext('easy')}
                size="lg"
              >
                <Check className="w-5 h-5 mr-2" />
                Fácil
              </Button>
            </div>
          )}

          {!isFlipped && (
            <div className="mt-8">
              <Button 
                variant="outline"
                onClick={handleFlip}
                size="lg"
              >
                Mostrar Resposta
              </Button>
            </div>
          )}

          {/* Session Stats */}
          <Card className="w-full max-w-2xl mt-8 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{sessionProgress}</div>
                  <div className="text-sm text-gray-500">Revisados</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    {sessionCards.length - currentCardIndex - 1}
                  </div>
                  <div className="text-sm text-gray-500">Restantes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">
                    {Math.round(progress)}%
                  </div>
                  <div className="text-sm text-gray-500">Completo</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}