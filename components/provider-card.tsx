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
    <Card className='max-w-lg py-0 flex-row gap-0 group hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]'>
      <CardContent className='grow-1 px-0 w-1/3'>
        <img
          src={img}
          alt={title}
          className='size-full rounded-l-xl object-contain p-4 bg-white dark:bg-gray-800 group-hover:scale-105 transition-transform duration-300'
        />
      </CardContent>
      <div className='flex-1 flex flex-col justify-between'>
        <CardHeader className='pb-2'>
          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">{title}</CardTitle>
          <CardDescription className="text-sm text-gray-600 dark:text-gray-400">{description}</CardDescription>
        </CardHeader>
        <CardFooter className='gap-3 pt-2 pb-4'>
          <Button className='bg-transparent bg-gradient-to-br from-purple-500 to-pink-500 text-white focus-visible:ring-pink-600/20 hover:from-purple-600 hover:to-pink-600 text-sm'>
            Explore Models
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}

export default ProviderCard