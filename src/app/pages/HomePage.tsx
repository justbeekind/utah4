import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Header from '../components/Header';
import { Card } from '../components/ui/card';
import { Shield, DollarSign, Home, HeartPulse, Stethoscope, Globe, Scale, Heart } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'events') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-white">
      <Header currentPage="home" onNavigate={onNavigate} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1695084040574-85a889cf66bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVdGFoJTIwbGFuZHNjYXBlJTIwbW91bnRhaW5zJTIwc2NlbmljfGVufDF8fHx8MTc3MjY4NzE0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Utah landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl mb-6">
              Joseph L. Wright for Congress
            </h1>
            <p className="text-2xl md:text-3xl mb-2 max-w-3xl mx-auto">
              Utah's 4th Congressional District
            </p>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto italic">
              Elevate Utah the Wright Way
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-3 text-lg rounded-md hover:bg-white hover:text-red-600 transition-all duration-300">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate + Portrait */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Joseph Louis Wright</h2>
            <p className="text-red-700 font-medium mb-4">Utah's 4th Congressional District</p>
            <p className="text-lg text-gray-700 mb-3">
              Joseph Wright is running for Congress to ensure working Utah families have a real voice in
              Washington — one that isn't drowned out by political insiders or corporate elites.
            </p>
            <p className="text-lg text-gray-700 mb-3">
              A combat medic in the U.S. Army, Wright understands the real cost of poor leadership and
              political irresponsibility. After returning home from military service, he built a career
              protecting Utah communities as a prosecutor and Attorney General, focusing on public safety,
              fighting human trafficking, and protecting vulnerable populations.
            </p>
            <p className="text-lg text-gray-700 mb-3">
              Now, Wright is running for Congress to bring common-sense leadership, fiscal responsibility,
              and practical problem solving to Washington.
            </p>
            <p className="text-lg text-gray-800 font-semibold">
              Utah deserves leadership that puts people before politics.
            </p>
          </div>
          <div className="max-w-md mx-auto w-full">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <ImageWithFallback
                src="/img/picture.jpg"
                alt="Joseph Wright portrait"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Issues */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-center mb-10 text-gray-900">Issues</h2>

          {/* Second Amendment */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-7 h-7 text-red-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Second Amendment</h3>
            </div>
            <p className="text-lg text-gray-700 mb-3">
              Joseph Wright is a gun owner and strong supporter of the Second Amendment. His approach focuses on
              protecting lawful gun ownership while addressing the root causes of violence.
            </p>
            <p className="font-medium text-gray-900 mb-2">Priorities include:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Expanding mental health resources</li>
              <li>Targeting illegal gun trafficking</li>
              <li>Protecting the rights of law-abiding gun owners</li>
            </ul>
          </div>

          {/* Protecting Life */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <HeartPulse className="w-7 h-7 text-red-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Protecting Life</h3>
            </div>
            <p className="text-lg text-gray-700">
              Wright is pro-life and supports policies that protect unborn life while expanding support systems
              for mothers and families.
            </p>
          </div>

          {/* Economy */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="w-7 h-7 text-red-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Economy</h3>
            </div>
            <p className="text-lg text-gray-700 mb-3">
              Wright supports small government and free markets.
            </p>
            <p className="font-medium text-gray-900 mb-2">Economic priorities include:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Lower taxes for working families</li>
              <li>Responsible government spending</li>
              <li>Encouraging entrepreneurship and small business growth</li>
              <li>Reducing unnecessary federal regulations</li>
            </ul>
          </div>

          {/* Housing and Homelessness */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <Home className="w-7 h-7 text-red-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Housing and Homelessness</h3>
            </div>
            <p className="text-lg text-gray-700 mb-3">
              Wright supports expanding housing accessibility and addressing homelessness through practical
              policy solutions.
            </p>
            <p className="font-medium text-gray-900 mb-2">Priorities include:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Expanding housing availability</li>
              <li>Supporting state housing initiatives</li>
              <li>Addressing homelessness through housing and employment programs</li>
              <li>Increasing the minimum wage to $9 per hour</li>
            </ul>
          </div>

          {/* Healthcare */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <Stethoscope className="w-7 h-7 text-red-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Healthcare</h3>
            </div>
            <p className="text-lg text-gray-700 mb-3">
              Wright opposes a fully nationalized healthcare system.
            </p>
            <p className="font-medium text-gray-900 mb-2">Instead, he supports:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>A competitive private healthcare market</li>
              <li>Government oversight on essential drug prices such as insulin</li>
              <li>Expanding affordability while preserving patient choice</li>
            </ul>
          </div>

          {/* Social Security */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Social Security</h3>
            <p className="text-lg text-gray-700 mb-3">
              Wright believes Social Security must remain solvent and reliable for future generations. He
              supports responsible reforms that prevent waste and protect benefits.
            </p>
          </div>

          {/* Immigration */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-7 h-7 text-red-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Immigration</h3>
            </div>
            <p className="text-lg text-gray-700 mb-3">
              Wright supports a secure but efficient immigration system.
            </p>
            <p className="font-medium text-gray-900 mb-2">His priorities include:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Strong enforcement against illegal immigration</li>
              <li>Maintaining ICE while improving accountability</li>
              <li>Expanding legal immigration pathways</li>
              <li>Reducing USCIS backlog and processing delays</li>
              <li>Addressing root causes of migration in Central America</li>
              <li>Combating fentanyl trafficking connected to cartel networks</li>
            </ul>
          </div>

          {/* Ethics and Transparency */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <Scale className="w-7 h-7 text-red-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Ethics and Transparency</h3>
            </div>
            <p className="text-lg text-gray-700 mb-3">
              Wright believes elected officials must be held to the highest ethical standards.
            </p>
            <p className="font-medium text-gray-900 mb-2">He supports:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>A ban on congressional insider trading</li>
              <li>Transparent campaign finance reporting</li>
              <li>Public disclosure of political contributions</li>
              <li>Refusing donations from AIPAC</li>
            </ul>
          </div>

          {/* Foreign Policy */}
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-7 h-7 text-red-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Foreign Policy</h3>
            </div>
            <p className="text-lg text-gray-700 mb-3">
              Wright supports a strong American foreign policy focused on national security and economic
              independence.
            </p>
            <p className="font-medium text-gray-900 mb-2">Key priorities include:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Standing firmly against the Chinese Communist Party</li>
              <li>Supporting Taiwan’s democratic government</li>
              <li>Combating fentanyl trafficking</li>
              <li>Expanding U.S. semiconductor manufacturing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-semibold mb-6">Support Our Campaign</h2>
          <p className="text-xl mb-8">
            Your contribution helps us reach more voters and spread our message across Utah's 4th District.
          </p>
          <div className="grid sm:grid-cols-4 gap-4 mb-6">
            {['$25', '$50', '$100', '$250'].map((amount) => (
              <button key={amount} className="border-2 border-white text-white px-6 py-3 text-lg rounded-md hover:bg-white hover:text-red-600 transition-all duration-300">
                {amount}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Team */}
      <section className="py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-gray-900">Campaign Team</h2>
          <div className="grid md:grid-cols-4 gap-12">
            <Card className="p-10 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Candidate</h3>
              <p className="text-gray-700">Joseph Louis Wright</p>
            </Card>
            <Card className="p-10 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Campaign Manager</h3>
              <p className="text-gray-700">Yogahari NJ</p>
            </Card>
            <Card className="p-10 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Press Secretary</h3>
              <p className="text-gray-700">Isabella Chigogidze</p>
            </Card>
            <Card className="p-10 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Finance Director</h3>
              <p className="text-gray-700">Kareena Ohri</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
