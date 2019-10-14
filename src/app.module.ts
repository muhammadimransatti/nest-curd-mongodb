import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [ProductsModule,MongooseModule.forRoot(
    'mongodb+srv://root:kThWXLKZ@9rKfDu@cluster0-jttvs.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }
    ), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
