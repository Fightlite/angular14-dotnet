using System;
using Microsoft.EntityFrameworkCore;

namespace SuperHero_API.Data
{
	public class DataContext: DbContext
	{
        public DataContext() { }

        public DataContext(DbContextOptions<DbContext> options) : base(options)
		{ }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("DefaultConnection");
            }
        }

        public DbSet<SuperHero> SuperHeroes => Set<SuperHero>();
	}
}

