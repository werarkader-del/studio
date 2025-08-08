import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { staff } from '@/lib/placeholder-data';
import { Mail, Phone } from 'lucide-react';

export default function StaffPage() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {staff.map((member) => (
        <Card key={member.id} className="flex flex-col items-center text-center animate-in fade-in">
          <CardHeader>
            <Avatar className="h-24 w-24">
              <AvatarImage src={member.avatarUrl} alt={member.name} data-ai-hint={member.avatarHint} />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent className="flex-1">
            <CardTitle className="text-lg">{member.name}</CardTitle>
            <p className="text-muted-foreground">{member.title}</p>
          </CardContent>
          <CardFooter className="flex w-full justify-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <a href={`mailto:${member.email}`}>
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={`tel:${member.phone}`}>
                <Phone className="h-4 w-4" />
                <span className="sr-only">Call</span>
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
