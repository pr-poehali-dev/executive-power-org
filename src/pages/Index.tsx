import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('powers');

  const powers = [
    {
      title: 'Разработка федерального бюджета',
      description: 'Подготовка и представление в Государственную Думу федерального бюджета и отчета о его исполнении',
      icon: 'FileText'
    },
    {
      title: 'Управление федеральной собственностью',
      description: 'Обеспечение единой финансовой, кредитной и денежной политики',
      icon: 'Building2'
    },
    {
      title: 'Обеспечение обороны и безопасности',
      description: 'Проведение единой государственной политики в области обороны и безопасности страны',
      icon: 'Shield'
    },
    {
      title: 'Внешняя политика',
      description: 'Осуществление мер по обеспечению законности, прав и свобод граждан',
      icon: 'Globe'
    }
  ];

  const structure = [
    {
      title: 'Председатель Правительства',
      description: 'Назначается Президентом РФ с согласия Государственной Думы',
      details: [
        'Определяет основные направления деятельности Правительства',
        'Организует работу Правительства',
        'Представляет Правительство внутри страны и в международных отношениях'
      ]
    },
    {
      title: 'Заместители Председателя',
      description: 'Координируют работу федеральных органов исполнительной власти',
      details: [
        'Курируют определенные направления деятельности',
        'Замещают Председателя в его отсутствие',
        'Координируют работу министерств и ведомств'
      ]
    },
    {
      title: 'Федеральные министры',
      description: 'Руководят отраслями и сферами управления',
      details: [
        'Определяют государственную политику в своей сфере',
        'Обеспечивают исполнение законодательства',
        'Управляют подведомственными организациями'
      ]
    }
  ];

  const functions = [
    {
      category: 'Экономическая политика',
      items: [
        'Разработка и реализация программ экономического развития',
        'Регулирование внешнеэкономической деятельности',
        'Управление государственным долгом'
      ]
    },
    {
      category: 'Социальная политика',
      items: [
        'Обеспечение социальных гарантий населению',
        'Развитие системы здравоохранения и образования',
        'Поддержка культуры и науки'
      ]
    },
    {
      category: 'Правовое регулирование',
      items: [
        'Подготовка законопроектов',
        'Издание постановлений и распоряжений',
        'Контроль исполнения законодательства'
      ]
    }
  ];

  const timeline = [
    { year: '1991', event: 'Образование Правительства Российской Федерации' },
    { year: '1993', event: 'Принятие Конституции РФ, закрепившей статус Правительства' },
    { year: '1997', event: 'Принятие ФКЗ "О Правительстве Российской Федерации"' },
    { year: '2020', event: 'Внесение поправок в Конституцию РФ' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <header className="bg-white border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="Landmark" size={32} className="text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Правительство Российской Федерации</h1>
          </div>
          <nav className="flex gap-6 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveSection('powers')}
              className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                activeSection === 'powers'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              Полномочия
            </button>
            <button
              onClick={() => setActiveSection('structure')}
              className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                activeSection === 'structure'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              Структура
            </button>
            <button
              onClick={() => setActiveSection('functions')}
              className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                activeSection === 'functions'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              Функции
            </button>
            <button
              onClick={() => setActiveSection('history')}
              className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                activeSection === 'history'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              История
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'powers' && (
          <section className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-3">Полномочия Правительства РФ</h2>
              <p className="text-muted-foreground text-lg">
                Правительство Российской Федерации — высший исполнительный орган государственной власти
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {powers.map((power, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon name={power.icon as any} size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{power.title}</h3>
                        <p className="text-muted-foreground">{power.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="BookOpen" size={24} className="text-primary" />
                  Конституционные основы
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Согласно статье 110 Конституции РФ, исполнительную власть Российской Федерации осуществляет 
                  Правительство Российской Федерации. Правительство состоит из Председателя Правительства, 
                  заместителей Председателя Правительства и федеральных министров.
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {activeSection === 'structure' && (
          <section className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-3">Структура Правительства</h2>
              <p className="text-muted-foreground text-lg">
                Организационная структура высшего исполнительного органа власти
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {structure.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <Icon name="User" size={20} className="text-primary" />
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2 mt-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        {activeSection === 'functions' && (
          <section className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-3">Функции Правительства</h2>
              <p className="text-muted-foreground text-lg">
                Основные направления деятельности исполнительной власти
              </p>
            </div>

            <Tabs defaultValue="economic" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="economic">Экономика</TabsTrigger>
                <TabsTrigger value="social">Социальная сфера</TabsTrigger>
                <TabsTrigger value="legal">Право</TabsTrigger>
              </TabsList>

              <TabsContent value="economic" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                      <Icon name="TrendingUp" size={24} className="text-primary" />
                      {functions[0].category}
                    </h3>
                    <ul className="space-y-3">
                      {functions[0].items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                          <Icon name="Circle" size={8} className="text-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="social" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                      <Icon name="Users" size={24} className="text-primary" />
                      {functions[1].category}
                    </h3>
                    <ul className="space-y-3">
                      {functions[1].items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                          <Icon name="Circle" size={8} className="text-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="legal" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                      <Icon name="Scale" size={24} className="text-primary" />
                      {functions[2].category}
                    </h3>
                    <ul className="space-y-3">
                      {functions[2].items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                          <Icon name="Circle" size={8} className="text-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>
        )}

        {activeSection === 'history' && (
          <section className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-3">История развития</h2>
              <p className="text-muted-foreground text-lg">
                Ключевые вехи становления исполнительной власти в России
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-20">
                    <div className="absolute left-0 top-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shadow-lg">
                      {item.year}
                    </div>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <p className="text-lg">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Card className="mt-12 bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <Icon name="Info" size={32} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Важно знать</h3>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Правительство РФ является коллегиальным органом, возглавляющим единую систему 
                  исполнительной власти в Российской Федерации
                </p>
              </CardContent>
            </Card>
          </section>
        )}
      </main>

      <footer className="bg-white border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Landmark" size={24} className="text-primary" />
              <span className="text-sm text-muted-foreground">Образовательный портал о Правительстве РФ</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Все материалы для образовательных целей</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
