# Portfolio Website - Next.js 14

A modern, full-stack portfolio website built with the latest technologies.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Modern styling
- **NextAuth.js** - Authentication
- **Prisma** - Database ORM
- **PostgreSQL** - Database

## Features

- 🎨 Modern, responsive design matching your specifications
- 🔐 Complete authentication system (login/register)
- 🛡️ Protected dashboard page
- 💾 Database integration with Prisma
- 📱 Fully responsive for all devices
- ⚡ Server-side rendering with Next.js 14
- 🎭 Type-safe with TypeScript

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

To generate a NEXTAUTH_SECRET, run:
```bash
openssl rand -base64 32
```

### 3. Set Up Database

You have several options for PostgreSQL:

#### Option A: Local PostgreSQL
Install PostgreSQL locally and create a database:
```bash
createdb portfolio
```

#### Option B: Supabase (Recommended)
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Get your connection string from Settings > Database
4. Update DATABASE_URL in your .env file

#### Option C: Vercel Postgres
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel postgres create`
3. Follow the prompts
4. Update DATABASE_URL with the connection string

### 4. Run Database Migrations

```bash
npx prisma generate
npx prisma db push
```

### 5. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## Pages

- **/** - Homepage with your portfolio
- **/login** - Login page
- **/register** - Registration page
- **/dashboard** - Protected dashboard (requires authentication)

## Customization

### Update Personal Information

Edit `app/page.tsx` to update:
- Your name and title
- Professional experience
- Projects
- Design thinking approach

### Add Profile Image

Add your profile picture as `public/profile.jpg`

### Add Project Images

Add project images to the `public` folder:
- `public/project1.jpg`
- `public/project2.jpg`
- `public/project3.jpg`

## Database Schema

The project includes:
- **User** model for authentication
- **Account** model for OAuth providers
- **Session** model for session management

To add more models, edit `prisma/schema.prisma` and run:
```bash
npx prisma db push
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

Vercel will automatically:
- Install dependencies
- Build your project
- Deploy to production

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Support

For issues or questions, please open an issue on GitHub.
