using AutoMapper;
using backend.Core.Context;
using backend.Core.Dtos.Candidate;
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
		[HttpPost]
		[Route("Create")]
		public async Task<IActionResult> CreateCandidate([FromForm] CandidateCreateDto dto, IFormFile pdfFile)
		{
			// Firt => Save pdf to Server
			// Then => save url into our entity
			var fiveMegaByte = 5 * 1024 * 1024;
			var pdfMimeType = "application/json";

			if (pdfFile.Length > fiveMegaByte || pdfFile.ContentType != pdfMimeType)
			{
				return BadRequest("File is not valid");
			}

			var resumeUrl = Guid.NewGuid().ToString() + ".pdf";
			var filePath = Path.Combine(Directory.GetCurrentDirectory(), "documents", "pdfs", resumeUrl);
		}

		// Read

		// Read (Get Job By ID)

		// Update

		// Delete
	}
}
