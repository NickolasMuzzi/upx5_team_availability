import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'
const prisma = new PrismaClient()

async function checkPendingMigrations () {
    try {
        // Verifica as migrações registradas no banco de dados
        const appliedMigrations = await prisma.$queryRaw`
      SELECT migration_name FROM _prisma_migrations WHERE finished_at IS NOT NULL
    `

        console.log( `Migrações aplicadas:`, appliedMigrations.length )

        // Comparar com o diretório de migrações locais

        const migrationsPath = `${path.resolve()}/src/prisma/migrations`
        const localMigrations = fs.readdirSync( migrationsPath ).filter( dir =>
            fs.statSync( path.join( migrationsPath, dir ) ).isDirectory()
        )
        console.log( `Migrações locais:`, localMigrations.length )

        if ( localMigrations.length > appliedMigrations.length ) {
            console.log( 'Existem migrações pendentes para serem aplicadas.' )
        } else {
            console.log( 'Todas as migrações estão aplicadas.' )
        }
    } catch ( error ) {
        console.error( 'Erro ao verificar migrações:', error )
    } finally {
        await prisma.$disconnect()
    }
}

export default checkPendingMigrations
