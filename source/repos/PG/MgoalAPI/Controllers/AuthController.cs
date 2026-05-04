//using MgoalAPI.Data;
//using MgoalAPI.Models;
//using Microsoft.AspNetCore.Mvc;

//namespace MgoalAPI.Controllers
//{
//    public class AuthController : Controller
//    {
//        public IActionResult Index()
//        {
//            return View();
//        }
//    }
//}
using Microsoft.AspNetCore.Mvc;
using MgoalAPI.Data;
using MgoalAPI.Models;
using System.Linq;
using MgoalAPI;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;

    public AuthController(AppDbContext context)
    {
        _context = context;
    }

    //[HttpPost("register")]
    //public IActionResult Register(User user)
    //{
    //    _context.Users.Add(user);
    //    _context.SaveChanges();

    //    return Ok("User Registered");
    //}
    [HttpPost("register")]
    public IActionResult Register([FromBody] User user)
    {
        if (user == null)
            return BadRequest();

        _context.Users.Add(user);
        _context.SaveChanges();

        return Ok(new { message = "User registered successfully" }); // ✅ FIX
    }

    //[HttpPost("login")]
    //public IActionResult Login(User login)
    //{
    //    var user = _context.Users
    //        .FirstOrDefault(u => u.Email == login.Email && u.Password == login.Password);

    //    if (user == null)
    //        return Unauthorized("Invalid credentials");

    //    return Ok(user);
    //}

    //[HttpPost("login")]
    //public IActionResult Login([FromBody] User login)
    //{
    //    if (login == null)
    //        return BadRequest("Invalid data");

    //    var user = _context.Users.FirstOrDefault(u =>
    //        u.Email.Trim().ToLower() == login.Email.Trim().ToLower() &&
    //        u.Password == login.Password
    //    );

    //    if (user == null)
    //        return Unauthorized("Invalid credentials");

    //    return Ok(new { success = true, user });
    //}  
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginModel login)
    {
        if (login == null)
            return BadRequest("Login object is NULL ❌");

        if (string.IsNullOrEmpty(login.Email) || string.IsNullOrEmpty(login.Password))
            return BadRequest("Email or Password is empty ❌");

        var user = _context.Users.FirstOrDefault(u =>
            u.Email.ToLower() == login.Email.ToLower() &&
            u.Password == login.Password
        );

        if (user == null)
            return Unauthorized(new { success = false });

        return Ok(new { success = true, user });
    }
}