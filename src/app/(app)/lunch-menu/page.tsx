import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { lunchMenu } from '@/lib/placeholder-data';

export default function LunchMenuPage() {
  const days = Object.keys(lunchMenu);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Lunch Menu</CardTitle>
        <CardDescription>
          Here's what's cooking in the cafeteria this week.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={days[0]} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            {days.map((day) => (
              <TabsTrigger key={day} value={day}>
                {day}
              </TabsTrigger>
            ))}
          </TabsList>
          {days.map((day) => (
            <TabsContent key={day} value={day}>
              <div className="grid gap-4 md:grid-cols-2 mt-4">
                {lunchMenu[day].map((item) => (
                  <Card key={item.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p className="font-semibold">Nutrition:</p>
                      <ul className="list-disc list-inside text-muted-foreground">
                        <li>Calories: {item.nutrition.calories}</li>
                        <li>Protein: {item.nutrition.protein}</li>
                        <li>Carbs: {item.nutrition.carbs}</li>
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
