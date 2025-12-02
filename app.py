import streamlit as st
from pathlib import Path

# Configuración de la página
st.set_page_config(
    page_title="WORLDTEL PERU BPO - Demo",
    page_icon="🌐",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Cargar CSS personalizado
def load_css(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        return f.read()

# Título principal
st.markdown("""
    <div style='text-align: center; padding: 30px 0;'>
        <h1 style='color: #00d9ff; font-size: 3em; margin: 0;'>🌐 WORLDTEL PERU BPO</h1>
        <p style='color: #2b9fcc; font-size: 1.2em; margin-top: 10px;'>Soluciones inteligentes de atención al cliente con alcance nacional</p>
    </div>
""", unsafe_allow_html=True)

st.markdown("---")

# Sidebar con información
with st.sidebar:
    st.header("📋 Información del Proyecto")
    st.info("""
    ### Presentación Web Completa
    
    Esta es una **vista previa interactiva** del sitio web WORLDTEL PERU BPO.
    
    **Características implementadas:**
    - ✅ Logo dinámico con WiFi animado
    - ✅ Navbar con color azul profesional
    - ✅ 7 secciones principales
    - ✅ Modal interactivo del directorio
    - ✅ Animaciones fluidas
    - ✅ Diseño responsive
    - ✅ Footer oscuro fijo
    """)
    
    st.markdown("---")
    st.subheader("🚀 Próximos pasos")
    st.markdown("""
    1. **Hosting**: Vercel, Netlify o AWS
    2. **Dominio**: Namecheap, GoDaddy
    3. **Email profesional**: info@worldtelperü.com
    4. **SEO**: Google Search Console
    5. **Analytics**: Google Analytics
    """)

# Tabs principales
tab1, tab2, tab3, tab4, tab5 = st.tabs(["👁️ Vista Previa", "📊 Características", "💡 Secciones", "🎨 Diseño", "📱 Responsive"])

# Tab 1: Vista Previa
with tab1:
    st.subheader("Vista Previa del Sitio Web")
    
    col1, col2 = st.columns([1, 1])
    
    with col1:
        st.write("### Encabezado (Navbar)")
        st.info("""
        - Logo WiFi + Globo animado
        - Texto "WORLDTEL PERU" en blanco
        - Navegación con 7 secciones
        - Color: Azul profesional (#1a5490 a #2b9fcc)
        - Fijo en la parte superior
        """)
    
    with col2:
        st.write("### Pie de Página (Footer)")
        st.info("""
        - Color oscuro fijo (sin cambios)
        - 4 columnas de información
        - Redes sociales
        - Información de contacto
        - Links legales
        - Fondo: Gradiente azul oscuro
        """)
    
    st.markdown("---")
    
    st.write("### Vista de escritorio")
    st.image("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23f0f0f0'/%3E%3Crect width='1200' height='72' fill='%231a5490'/%3E%3Ctext x='30' y='45' font-size='24' fill='white' font-weight='bold'%3EWORLDTEL PERU%3C/text%3E%3Crect y='700' width='1200' height='100' fill='%230a1f47'/%3E%3C/svg%3E", use_column_width=True)

# Tab 2: Características
with tab2:
    st.subheader("🎯 Características Implementadas")
    
    features = {
        "Animaciones": [
            "✅ Logo WiFi con expansión continua",
            "✅ Animaciones fluidas en secciones",
            "✅ Efectos hover en botones",
            "✅ Transiciones suaves"
        ],
        "Diseño": [
            "✅ Interfaz moderna y profesional",
            "✅ Paleta de colores azul-cyan",
            "✅ Tipografía clara y legible",
            "✅ Espaciado proporcional"
        ],
        "Funcionalidad": [
            "✅ Modal interactivo (directorio)",
            "✅ Sistema de tabs/pestañas",
            "✅ Formulario de contacto",
            "✅ Carrusel de galería"
        ],
        "Rendimiento": [
            "✅ Optimizado para todos los dispositivos",
            "✅ Carga rápida",
            "✅ SEO friendly",
            "✅ Accesibilidad mejorada"
        ]
    }
    
    cols = st.columns(2)
    for idx, (category, items) in enumerate(features.items()):
        with cols[idx % 2]:
            st.write(f"### {category}")
            for item in items:
                st.write(item)

# Tab 3: Secciones
with tab3:
    st.subheader("📑 Secciones del Sitio")
    
    sections = {
        "1. Inicio": "Hero con logo y CTA principal",
        "2. Acerca de": "Información sobre WORLDTEL PERU BPO",
        "3. Clientes": "Logos de clientes principales (Bitel, Claro, Win, etc.)",
        "4. Especialidades": "Servicios principales ofrecidos",
        "5. Galería": "Fotos de las instalaciones",
        "6. Directorio": "Modal interactivo con perfiles del equipo",
        "7. Contacto": "Formulario y ubicación en mapa"
    }
    
    for section, description in sections.items():
        st.write(f"**{section}**: {description}")

# Tab 4: Diseño
with tab4:
    st.subheader("🎨 Decisiones de Diseño")
    
    col1, col2 = st.columns(2)
    
    with col1:
        st.write("### Paleta de Colores")
        st.markdown("""
        - **Azul Oscuro**: #0a1f47 (Base, footer)
        - **Azul Principal**: #1a5490 (Navbar)
        - **Azul Claro**: #2b9fcc (Acentos)
        - **Cyan**: #00d9ff (Highlights, animaciones)
        - **Blanco**: #FFFFFF (Texto principal)
        """)
    
    with col2:
        st.write("### Tipografía")
        st.markdown("""
        - **Headings**: Poppins (700-900 weight)
        - **Subtítulos**: Montserrat (700-800 weight)
        - **Body**: System fonts (accesibilidad)
        - **Tamaños**: Responsive (clamp)
        """)

# Tab 5: Responsive
with tab5:
    st.subheader("📱 Diseño Responsive")
    
    col1, col2, col3 = st.columns(3)
    
    with col1:
        st.write("### Desktop")
        st.markdown("""
        - Ancho: 1200px
        - Navbar fijo
        - 2-3 columnas
        - Fuentes grandes
        """)
    
    with col2:
        st.write("### Tablet")
        st.markdown("""
        - Ancho: 768px
        - Navbar adaptado
        - 1-2 columnas
        - Fuentes medianas
        """)
    
    with col3:
        st.write("### Móvil")
        st.markdown("""
        - Ancho: 480px
        - Navbar compacto
        - 1 columna
        - Fuentes pequeñas
        """)

st.markdown("---")

# Información de hosting y dominio
st.subheader("🚀 Recomendaciones para Producción")

col1, col2, col3 = st.columns(3)

with col1:
    st.write("### Hosting")
    st.markdown("""
    **Opciones recomendadas:**
    - Vercel: $20/mes
    - Netlify: $19/mes
    - AWS: $10-50/mes
    - DigitalOcean: $5-12/mes
    """)

with col2:
    st.write("### Dominio")
    st.markdown("""
    **Proveedores:**
    - Namecheap: $8.88/año
    - GoDaddy: $10/año
    - Google Domains: $12/año
    - HostGator: $2.95/año
    """)

with col3:
    st.write("### Certificado SSL")
    st.markdown("""
    **Obtener HTTPS:**
    - Let's Encrypt: Gratis
    - Cloudflare: Gratis/Pro
    - SSLs.com: $4-10/año
    
    **Ventajas:**
    - 🔒 Seguridad
    - 📈 SEO boost
    - 🚀 Confianza
    """)

st.markdown("---")

# Botón de descarga del código
st.subheader("📥 Descarga del Proyecto")

col1, col2 = st.columns(2)

with col1:
    st.info("""
    **Archivos incluidos:**
    - index.html (estructura)
    - styles.css (estilos)
    - script.js (funcionalidad)
    - Imágenes optimizadas
    """)

with col2:
    st.success("""
    **¿Listo para publicar?**
    
    Pasos finales:
    1. Comprar dominio
    2. Contratar hosting
    3. Subir archivos (FTP/Git)
    4. Configurar DNS
    5. Activar SSL
    """)

# Footer de Streamlit
st.markdown("---")
st.markdown("""
<div style='text-align: center; color: #666; font-size: 0.9em; padding: 20px;'>
    <p>WORLDTEL PERU BPO © 2024 | Demo interactivo creado con Streamlit</p>
    <p>Para consultas técnicas: contacto@worldtelperu.com</p>
</div>
""", unsafe_allow_html=True)
