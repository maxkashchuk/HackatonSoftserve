using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HackatonSoftserve.Migrations
{
    /// <inheritdoc />
    public partial class Initial_6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TeacherUser_Teachers_UserId",
                table: "TeacherUser");

            migrationBuilder.DropForeignKey(
                name: "FK_TeacherUser_Users_TeacherId",
                table: "TeacherUser");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "TeacherUser",
                newName: "TeachersTeacherId");

            migrationBuilder.RenameColumn(
                name: "TeacherId",
                table: "TeacherUser",
                newName: "StudentsUserId");

            migrationBuilder.RenameIndex(
                name: "IX_TeacherUser_UserId",
                table: "TeacherUser",
                newName: "IX_TeacherUser_TeachersTeacherId");

            migrationBuilder.AddForeignKey(
                name: "FK_TeacherUser_Teachers_TeachersTeacherId",
                table: "TeacherUser",
                column: "TeachersTeacherId",
                principalTable: "Teachers",
                principalColumn: "TeacherId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TeacherUser_Users_StudentsUserId",
                table: "TeacherUser",
                column: "StudentsUserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TeacherUser_Teachers_TeachersTeacherId",
                table: "TeacherUser");

            migrationBuilder.DropForeignKey(
                name: "FK_TeacherUser_Users_StudentsUserId",
                table: "TeacherUser");

            migrationBuilder.RenameColumn(
                name: "TeachersTeacherId",
                table: "TeacherUser",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "StudentsUserId",
                table: "TeacherUser",
                newName: "TeacherId");

            migrationBuilder.RenameIndex(
                name: "IX_TeacherUser_TeachersTeacherId",
                table: "TeacherUser",
                newName: "IX_TeacherUser_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_TeacherUser_Teachers_UserId",
                table: "TeacherUser",
                column: "UserId",
                principalTable: "Teachers",
                principalColumn: "TeacherId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TeacherUser_Users_TeacherId",
                table: "TeacherUser",
                column: "TeacherId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
