'use client';

import { useState } from 'react';

import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const DEMO_CREDENTIALS = {
  email: 'admin@dukcapil.go.id',
  password: 'password123'
};

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState(DEMO_CREDENTIALS.email);
  const [password, setPassword] = useState(DEMO_CREDENTIALS.password);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (
      email === DEMO_CREDENTIALS.email &&
      password === DEMO_CREDENTIALS.password
    ) {
      navigate({ to: '/dashboard' });
    } else {
      setError(
        'Email atau password salah. Gunakan admin@dukcapil.go.id / password123'
      );
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleLogin}>
      {/* Email */}
      <div className="space-y-1">
        <Label className="leading-5" htmlFor="userEmail">
          Email address*
        </Label>
        <Input
          type="email"
          id="userEmail"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Password */}
      <div className="w-full space-y-1">
        <Label className="leading-5" htmlFor="password">
          Password*
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={isVisible ? 'text' : 'password'}
            placeholder="••••••••••••••••"
            className="pr-9"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible((prevState) => !prevState)}
            className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
          >
            {isVisible ? <EyeOffIcon /> : <EyeIcon />}
            <span className="sr-only">
              {isVisible ? 'Hide password' : 'Show password'}
            </span>
          </Button>
        </div>
      </div>

      {error && <div className="text-sm text-destructive">{error}</div>}

      {/* Remember Me and Forgot Password */}
      <div className="flex items-center justify-between gap-y-2">
        <div className="flex items-center gap-3">
          <Checkbox id="rememberMe" className="size-6" />
          <Label htmlFor="rememberMe"> Remember Me</Label>
        </div>

        <a href="#" className="hover:underline text-sm text-muted-foreground">
          Forgot Password?
        </a>
      </div>

      <Button className="w-full" type="submit">
        Masuk ke Dukcapil SMKI
      </Button>
    </form>
  );
};

export default LoginForm;
