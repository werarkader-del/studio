'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { askQuestion } from './actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Bot, User, Loader2, AlertTriangle } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Thinking...
        </>
      ) : (
        'Ask Question'
      )}
    </Button>
  );
}

export default function FaqPage() {
  const initialState = { answer: '', error: '' };
  const [state, formAction] = useFormState(askQuestion, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if(state?.error) {
        toast({
            variant: "destructive",
            title: "Error",
            description: state.error,
        })
    }
  }, [state, toast]);

  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-6 w-6" />
            AI-Powered FAQ
          </CardTitle>
          <CardDescription>
            Have a question about school policies or procedures? Ask our AI assistant.
          </CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="question">Your Question</Label>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <Input
                  id="question"
                  name="question"
                  placeholder="e.g., What is the policy on late homework?"
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <p className="text-xs text-muted-foreground">
                Answers are AI-generated and may not be perfect.
            </p>
            <SubmitButton />
          </CardFooter>
        </form>

        {state?.answer && (
           <CardContent className="border-t pt-6">
                <div className="flex gap-4">
                    <Bot className="h-8 w-8 text-primary flex-shrink-0" />
                    <div className="space-y-2">
                        <p className="font-semibold">Answer:</p>
                        <p className="text-muted-foreground">{state.answer}</p>
                    </div>
                </div>
            </CardContent>
        )}
      </Card>
    </div>
  );
}
