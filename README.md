# EduAcademy - Modern Academy Website

A modern, fully responsive academy website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features beautiful animations, course listings, and a comprehensive enquiry system.

## 🚀 Features

- **Modern Design**: Clean, professional UI with Apple-level design aesthetics
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging animations using Framer Motion
- **Course Management**: Dynamic course listings with detailed information
- **Enquiry System**: Complete registration form with email notifications
- **Performance Optimized**: Fast loading with lazy image loading
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form
- **Email Service**: EmailJS
- **Notifications**: React Hot Toast
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd modern-academy-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS** (Required for form submissions)
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a new service and email template
   - Update the following in `src/pages/CourseEnquiry.tsx`:
     ```typescript
     emailjs.init("YOUR_PUBLIC_KEY") // Replace with your EmailJS public key
     
     await emailjs.send(
       'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
       'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
       templateParams
     )
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📧 Email Configuration

The website uses EmailJS to send emails when users submit course enquiry forms. To set this up:

1. Create an EmailJS account
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{to_email}}` - Recipient email (saitejak.react@gmail.com)
   - `{{cc_email}}` - User's email for CC
   - `{{course_name}}` - Course title
   - `{{student_name}}` - Student's full name
   - `{{student_email}}` - Student's email
   - `{{student_phone}}` - Student's phone number
   - `{{student_qualification}}` - Student's qualification
   - `{{student_city}}` - Student's city

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`. You can modify the primary and secondary colors:

```javascript
colors: {
  primary: {
    // Your primary color shades
  },
  secondary: {
    // Your secondary color shades
  }
}
```

### Courses
Course data is currently stored in the `CourseEnquiry.tsx` component. In a production environment, this would typically come from a CMS or API.

### Images
All images are sourced from Pexels. You can replace them with your own images by updating the image URLs in the components.

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎭 Animations

The website features various animations:
- **Page transitions**: Smooth transitions between routes
- **Scroll animations**: Elements animate as they come into view
- **Hover effects**: Interactive hover states on buttons and cards
- **Loading animations**: Custom loading states for form submissions

## 🔧 Performance Optimizations

- **Lazy loading**: Images load as they come into view
- **Code splitting**: Automatic code splitting with Vite
- **Optimized images**: Compressed images from Pexels
- **Minimal dependencies**: Only essential packages included

## 📄 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Courses.tsx     # Courses grid
│   └── Contact.tsx     # Contact section
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   └── CourseEnquiry.tsx # Course enquiry page
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🚀 Deployment

The website can be deployed to any static hosting service:

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import your project for instant deployment
- **GitHub Pages**: Use GitHub Actions for deployment

## 📞 Support

For questions or support, please contact:
- Email: saitejak.react@gmail.com

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for modern education platforms.