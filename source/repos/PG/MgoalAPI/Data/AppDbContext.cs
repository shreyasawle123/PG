
using Microsoft.EntityFrameworkCore;
using MgoalAPI.Models;

namespace MgoalAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        //public DbSet<User> Users{ get; set; }

    }
}