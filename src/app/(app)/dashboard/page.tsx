'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { announcements, calendarEvents } from '@/lib/placeholder-data';
import { Megaphone, PlusCircle, Calendar as CalendarIcon } from 'lucide-react';

export default function DashboardPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  const todayEvents = calendarEvents.filter(
    (event) =>
      event.date.getDate() === date?.getDate() &&
      event.date.getMonth() === date?.getMonth() &&
      event.date.getFullYear() === date?.getFullYear()
  );

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1.5">
              <CardTitle className="flex items-center gap-2">
                <Megaphone className="h-6 w-6" />
                Announcements
              </CardTitle>
              <CardDescription>
                Latest news and updates from the school administration.
              </CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Announcement
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create New Announcement</DialogTitle>
                  <DialogDescription>
                    This will be visible to all users. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                      Title
                    </Label>
                    <Input id="title" placeholder="e.g. School Holiday" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="content" className="text-right">
                      Content
                    </Label>
                    <Textarea id="content" placeholder="Type your announcement content here." className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save Announcement</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="p-4 rounded-lg border bg-card">
                <h3 className="font-semibold">{announcement.title}</h3>
                <p className="text-sm text-muted-foreground">{announcement.content}</p>
                <p className="text-xs text-muted-foreground mt-2">{new Date(announcement.date).toLocaleDateString()}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-6 w-6" />
              School Calendar
            </CardTitle>
            <CardDescription>Upcoming events and important dates.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
             <div className="w-full mt-4 space-y-2">
                <h4 className="font-semibold text-center">{date ? date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Select a date'}</h4>
                {todayEvents.length > 0 ? (
                    todayEvents.map(event => (
                        <div key={event.id} className="p-3 text-sm rounded-lg border bg-card">
                            <p className="font-medium">{event.title}</p>
                            <p className="text-muted-foreground">{event.description}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-muted-foreground text-center">No events for this day.</p>
                )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
