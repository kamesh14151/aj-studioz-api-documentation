import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ProviderCardProps {
  title: string;
  description: string;
  models: string;
  img: string;
}

const ProviderCard = ({ title, description, models, img }: ProviderCardProps) => {
  return (
    <Card className='group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 hover:scale-105 sm:flex-row sm:gap-0'>
      <CardContent className='grow-1 px-0'>
        <div className="p-6 flex justify-center items-center h-[140px] bg-white dark:bg-gray-800 rounded-l-lg">
          <img
            src={img}
            alt={title}
            className='max-h-16 max-w-24 object-contain filter group-hover:brightness-110 transition-all duration-300'
          />
        </div>
      </CardContent>
      <div className='sm:min-w-54'>
        <CardHeader className='pt-6'>
          <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">{title}</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400 line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardFooter className='gap-2 py-6 flex-wrap'>
          {models.split(", ").map((model, idx) => (
            <Button 
              key={idx} 
              size="sm"
              variant="outline"
              className='bg-transparent bg-gradient-to-br from-blue-500 to-purple-500 text-white border-0 hover:from-blue-600 hover:to-purple-600 focus-visible:ring-blue-600/20 text-xs px-2 py-1'
            >
              {model}
            </Button>
          ))}
        </CardFooter>
      </div>
    </Card>
  )
}

export default ProviderCard