using AutoMapper;
using backend.Core.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class CandidateController : ControllerBase
	{
		private ApplicationDbContext _context { get; }
		private IMapper _mapper { get; }

		public CandidateController(ApplicationDbContext context, IMapper mapper)
		{
			_context = context;
			_mapper = mapper;
		}

		// CRUD 

		// Create

		// Read

		// Read (Get Job By ID)

		// Update

		// Delete
	}
}
