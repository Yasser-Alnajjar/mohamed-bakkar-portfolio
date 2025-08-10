# Frontend Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed specifically for frontend developers to showcase their skills, projects, and experience.

## 🎨 Design Features

- **Dark Theme** with Vanilla Latte accent color (#F5E6D3)
- **Modern Typography** using Poppins font family
- **12-Column Grid Layout** for easy development and maintenance
- **Smooth Animations** powered by Framer Motion
- **Fully Responsive** design for all devices
- **Professional Layout** optimized for job applications

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Poppins (Google Fonts)

## 📁 Project Structure

```
next-portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── Navigation.tsx       # Navigation bar component
│   ├── Hero.tsx            # Home section with introduction
│   ├── About.tsx           # About section with bio and strengths
│   ├── Skills.tsx          # Technical skills showcase
│   ├── Projects.tsx        # Projects portfolio
│   ├── Experience.tsx      # Professional experience timeline
│   └── Contact.tsx         # Contact form and information
├── tailwind.config.js      # Tailwind configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd next-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Customization Guide

### 1. Personal Information

Update the following files with your information:

- **Hero Section** (`components/Hero.tsx`): Replace `[Your Name]` with your actual name
- **About Section** (`components/About.tsx`): Update bio, strengths, and education
- **Experience Section** (`components/Experience.tsx`): Replace with your work history
- **Contact Section** (`components/Contact.tsx`): Update contact details and social links

### 2. Projects

Edit the `projects` array in `components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    image: "/path/to/image.jpg",
    tech: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourname/project",
    featured: true, // Set to true for featured projects
  },
];
```

### 3. Skills

Update the `skillCategories` array in `components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "⚛️", level: 90 },
      // Add your skills here
    ],
  },
];
```

### 4. Colors and Styling

Modify the color palette in `tailwind.config.js`:

```javascript
colors: {
  'vanilla-latte': '#F5E6D3', // Your accent color
  'dark-bg': '#0A0A0A',       // Background color
  // ... other colors
}
```

### 5. Profile Picture

Replace the placeholder in `components/Hero.tsx` with your actual profile picture:

```typescript
// Replace the placeholder div with an actual image
<Image
  src="/your-profile-picture.jpg"
  alt="Your Name"
  width={400}
  height={400}
  className="rounded-full"
/>
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design System

### Colors

- **Primary Background**: #0A0A0A (Dark)
- **Surface**: #1A1A1A (Dark Surface)
- **Cards**: #2A2A2A (Dark Card)
- **Accent**: #F5E6D3 (Vanilla Latte)
- **Text Primary**: #FFFFFF (White)
- **Text Secondary**: #A0A0A0 (Gray)

### Typography

- **Font Family**: Poppins
- **Weights**: 400 (Regular), 500 (Medium), 700 (Bold)
- **Headings**: 2xl-5xl sizes
- **Body**: Base size with relaxed line height

### Spacing

- **Section Padding**: 4rem (mobile) / 6rem (desktop)
- **Grid Gap**: 1rem (mobile) / 1.5rem (desktop)
- **Card Padding**: 1.5rem

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

---

**Happy coding! 🎉**
