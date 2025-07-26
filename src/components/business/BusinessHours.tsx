import { Clock } from 'lucide-react';
import clsx from 'clsx';

interface BusinessHoursProps {
  hours: {
    [key: string]: { open: string; close: string } | null;
  };
}

export default function BusinessHours({ hours }: BusinessHoursProps) {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Get current day
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  
  // Check if currently open
  const isOpenNow = () => {
    const todayHours = hours[today];
    if (!todayHours) return false;
    
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    return currentTime >= todayHours.open && currentTime < todayHours.close;
  };

  // Format time for display
  const formatTime = (time: string) => {
    const [hour, minute] = time.split(':');
    const h = parseInt(hour);
    const period = h >= 12 ? 'PM' : 'AM';
    const displayHour = h > 12 ? h - 12 : h === 0 ? 12 : h;
    return `${displayHour}:${minute} ${period}`;
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Clock size={20} />
        <h2 className="text-xl font-semibold">Business Hours</h2>
        <span className={clsx(
          'ml-auto text-sm font-medium px-3 py-1 rounded-full',
          isOpenNow() 
            ? 'bg-success/10 text-success' 
            : 'bg-error/10 text-error'
        )}>
          {isOpenNow() ? 'Open Now' : 'Closed Now'}
        </span>
      </div>
      
      <div className="space-y-2">
        {days.map((day, index) => {
          const dayHours = hours[day];
          const isToday = day === today;
          
          return (
            <div 
              key={day}
              className={clsx(
                'flex items-center justify-between py-2 px-3 rounded-md transition-colors',
                isToday && 'bg-muted font-medium'
              )}
            >
              <span className="capitalize">{dayNames[index]}</span>
              <span className={clsx(
                'text-sm',
                !dayHours && 'text-muted-foreground'
              )}>
                {dayHours 
                  ? `${formatTime(dayHours.open)} - ${formatTime(dayHours.close)}`
                  : 'Closed'
                }
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
