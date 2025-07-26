import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Reveal } from "@/utils/scrollAnimations";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      title: "Endüstriyel Enerji Verimliliğinde AI'nin Rolü",
      excerpt: "Yapay zeka teknolojilerinin enerji sektöründe nasıl devrim yarattığını keşfedin.",
      date: "2024-01-15",
      readTime: "5 dk",
      author: "Dr. Mehmet Özkan",
      category: "Teknoloji",
      featured: true
    },
    {
      title: "CBAM Yönetmeliği ve Karbon Ayak İzi",
      excerpt: "Avrupa Birliği'nin yeni karbon sınır düzenlemesi ve işletmelere etkileri.",
      date: "2024-01-10",
      readTime: "7 dk",
      author: "Ayşe Demir",
      category: "Düzenleme"
    },
    {
      title: "P2P Enerji Ticareti: Geleceğin Pazaryeri",
      excerpt: "Blokzincir teknolojisi ile enerji ticaretinin demokratikleşmesi.",
      date: "2024-01-05",
      readTime: "6 dk",
      author: "Eng. Fatih Yılmaz",
      category: "İnovasyon"
    },
    {
      title: "Reaktif Güç Yönetimi ile Maliyet Optimizasyonu",
      excerpt: "Reaktif güç cezalarından kaçınmanın pratik yolları.",
      date: "2024-01-01",
      readTime: "4 dk",
      author: "Dr. Zeynep Kara",
      category: "Optimizasyon"
    },
    {
      title: "Dijital İkiz Teknolojisi: Fabrika Simülasyonu",
      excerpt: "Dijital ikiz ile üretim süreçlerini optimize etme.",
      date: "2023-12-28",
      readTime: "8 dk",
      author: "Eng. Ali Çelik",
      category: "Teknoloji"
    },
    {
      title: "Sürdürülebilirlik ve ESG Raporlama",
      excerpt: "Çevre, sosyal ve yönetişim kriterlerinin modern işletmelerdeki önemi.",
      date: "2023-12-25",
      readTime: "6 dk",
      author: "Dr. Selin Aktaş",
      category: "Sürdürülebilirlik"
    }
  ];

  const categories = ["Tümü", "Teknoloji", "Düzenleme", "İnovasyon", "Optimizasyon", "Sürdürülebilirlik"];

  return (
    <main className="min-h-screen scroll-smooth snap-y snap-mandatory">
      <Helmet>
        <title>Blog & Bilgi Merkezi - AEMOS Voltura</title>
        <meta name="description" content="Endüstriyel enerji yönetimi, AI teknolojileri ve sürdürülebilirlik hakkında güncel içerikler." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="snap-start bg-white pt-16 min-h-screen flex items-center">
        <div className="container">
          <Reveal>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Blog & <span className="text-gradient">Bilgi Merkezi</span>
              </h1>
              <p className="text-subhero text-gray-600 max-w-3xl mx-auto mb-12">
                Endüstriyel enerji yönetimi, AI teknolojileri ve sürdürülebilirlik hakkında 
                güncel içerikler, uzman görüşleri ve sektör analizleri.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="snap-start bg-muted">
        <div className="container">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Kategoriler</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      index === 0 
                        ? 'bg-primary text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="snap-start bg-white">
        <div className="container">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Son Yazılar
              </h2>
            </div>
          </Reveal>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className={`climate-card bg-white p-6 ${
                  post.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      Öne Çıkan
                    </span>
                  )}
                </div>
                
                <h3 className={`font-bold text-gray-900 mb-4 ${
                  post.featured ? 'text-2xl' : 'text-xl'
                }`}>
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('tr-TR')}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                
                <a
                  href="#"
                  className="inline-flex items-center text-accent font-medium hover:text-accent/80 transition-colors"
                >
                  Devamını Oku
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="snap-start bg-muted">
        <div className="container">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Güncel Kalın
              </h2>
              <p className="text-subhero text-gray-600 mb-8 max-w-2xl mx-auto">
                Enerji yönetimi ve teknoloji trendleri hakkında haftalık bülten alın.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="px-4 py-3 rounded-lg border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="climate-button px-6 py-3">
                  Abone Ol
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
